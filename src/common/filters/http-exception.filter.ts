import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let message = exception.message;

    if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      const responseBody = exceptionResponse as {
        message?: string | string[];
      };

      if (Array.isArray(responseBody.message)) {
        message = responseBody.message.join(', ');
      } else if (responseBody.message) {
        message = responseBody.message;
      }
    }

    response.status(status).json({
      error: {
        code: HttpStatus[status] ?? 'HTTP_ERROR',
        message,
      },
    });
  }
}
