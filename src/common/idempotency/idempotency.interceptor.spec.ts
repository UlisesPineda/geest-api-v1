import { CallHandler, ExecutionContext } from '@nestjs/common';
import { firstValueFrom, of } from 'rxjs';

import { IdempotencyInterceptor } from './idempotency.interceptor';
import { IdempotencyService } from './idempotency.service';

describe('IdempotencyInterceptor', () => {
  let interceptor: IdempotencyInterceptor;

  const idempotencyServiceMock = {
    createRequestHash: jest.fn(),
    reserve: jest.fn(),
    waitForCompletion: jest.fn(),
    complete: jest.fn(),
  };

  beforeEach(() => {
    interceptor = new IdempotencyInterceptor(
      idempotencyServiceMock as unknown as IdempotencyService,
    );

    jest.clearAllMocks();
  });

  it('should reject an Idempotency-Key reused with a different request body', async () => {
    const request = {
      method: 'POST',
      path: '/tasks',
      body: {
        title: 'New title',
      },
      header: jest.fn().mockReturnValue('task-key-001'),
    };

    const response = {
      statusCode: 201,
      status: jest.fn().mockReturnThis(),
    };

    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
        getResponse: () => response,
      }),
    } as unknown as ExecutionContext;

    const handleMock = jest.fn(() => of({ id: 'task-id' }));

    const next = {
      handle: handleMock,
    };

    idempotencyServiceMock.createRequestHash.mockReturnValue('new-hash');

    idempotencyServiceMock.reserve.mockResolvedValue({
      created: false,
      record: {
        id: 'record-id',
        requestHash: 'original-hash',
        completed: true,
        statusCode: 201,
        responseBody: {
          id: 'existing-task-id',
        },
      },
    });

    await expect(
      firstValueFrom(interceptor.intercept(context, next as CallHandler)),
    ).rejects.toThrow(
      'Idempotency-Key was already used with a different request body',
    );

    expect(handleMock).not.toHaveBeenCalled();
    expect(idempotencyServiceMock.complete).not.toHaveBeenCalled();
  });

  it('should replay the stored response for a completed request', async () => {
    const storedResponse = {
      id: 'existing-task-id',
      title: 'Test task',
    };

    const request = {
      method: 'POST',
      path: '/tasks',
      body: {
        title: 'Test task',
      },
      header: jest.fn().mockReturnValue('task-key-001'),
    };

    const response = {
      statusCode: 200,
      status: jest.fn().mockReturnThis(),
    };

    const context = {
      switchToHttp: () => ({
        getRequest: () => request,
        getResponse: () => response,
      }),
    } as unknown as ExecutionContext;

    const handleMock = jest.fn(() => of({ id: 'new-task-id' }));

    const next = {
      handle: handleMock,
    };

    idempotencyServiceMock.createRequestHash.mockReturnValue('same-hash');

    idempotencyServiceMock.reserve.mockResolvedValue({
      created: false,
      record: {
        id: 'record-id',
        requestHash: 'same-hash',
        completed: true,
        statusCode: 201,
        responseBody: storedResponse,
      },
    });

    const result = await firstValueFrom(
      interceptor.intercept(context, next as CallHandler),
    );

    expect(result).toEqual(storedResponse);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(handleMock).not.toHaveBeenCalled();
    expect(idempotencyServiceMock.complete).not.toHaveBeenCalled();
  });
});
