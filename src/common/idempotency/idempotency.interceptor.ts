import {
  BadRequestException,
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IdempotencyService } from './idempotency.service';

@Injectable()
export class IdempotencyInterceptor implements NestInterceptor {
  constructor(private readonly idempotencyService: IdempotencyService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const http = context.switchToHttp();
    const request = http.getRequest<Request>();
    const response = http.getResponse<Response>();

    if (request.method !== 'POST') {
      return next.handle();
    }

    const key = request.header('Idempotency-Key');

    if (!key) {
      throw new BadRequestException('Idempotency-Key header is required');
    }

    const endpoint = request.path;
    const requestHash = this.idempotencyService.createRequestHash(request.body);

    return from(
      this.idempotencyService.reserve(key, endpoint, requestHash),
    ).pipe(
      switchMap(({ record, created }) => {
        if (!created) {
          if (record.requestHash !== requestHash) {
            throw new ConflictException(
              'Idempotency-Key was already used with a different request body',
            );
          }
          if (record.completed) {
            response.status(record.statusCode ?? 200);
            return of(record.responseBody);
          }
          // throw new ConflictException(
          //   'Request with this Idempotency-Key is already in progress',
          // );
          return from(
            this.idempotencyService.waitForCompletion(key, endpoint),
          ).pipe(
            switchMap((completedRecord) => {
              if (!completedRecord) {
                throw new ConflictException(
                  'Request with this Idempotency-Key is still in progress',
                );
              }

              response.status(completedRecord.statusCode ?? 200);
              return of(completedRecord.responseBody);
            }),
          );
        }
        return next
          .handle()
          .pipe(
            switchMap((responseBody) =>
              from(
                this.idempotencyService.complete(
                  record.id,
                  response.statusCode,
                  responseBody as object,
                ),
              ).pipe(switchMap(() => of(responseBody))),
            ),
          );
      }),
    );
  }
}
