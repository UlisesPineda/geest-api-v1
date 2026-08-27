import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

interface ErrorResponse {
  error: {
    code: string;
    message: string;
  };
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const response = host.switchToHttp().getResponse<Response>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      let message = exception.message;

      if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null &&
        'message' in exceptionResponse
      ) {
        const responseMessage = exceptionResponse.message;

        message = Array.isArray(responseMessage)
          ? responseMessage.join(', ')
          : String(responseMessage);
      }

      const body: ErrorResponse = {
        error: {
          code: HttpStatus[status] ?? 'HTTP_ERROR',
          message,
        },
      };

      response.status(status).json(body);
      return;
    }

    const body: ErrorResponse = {
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
      },
    };

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(body);
  }
}
