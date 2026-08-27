import { ArgumentsHost, HttpStatus } from '@nestjs/common';

import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptionFilter', () => {
  it('should format unexpected errors using the required error contract', () => {
    const jsonMock = jest.fn();
    const statusMock = jest.fn().mockReturnValue({
      json: jsonMock,
    });

    const host = {
      switchToHttp: () => ({
        getResponse: () => ({
          status: statusMock,
        }),
      }),
    } as unknown as ArgumentsHost;

    const filter = new HttpExceptionFilter();

    filter.catch(new Error('Unexpected failure'), host);

    expect(statusMock).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);

    expect(jsonMock).toHaveBeenCalledWith({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Internal server error',
      },
    });
  });
});
