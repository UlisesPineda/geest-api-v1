import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of, throwError } from 'rxjs';
import { AxiosError } from 'axios';

import { NotificationsRepository } from './notifications.repository';
import { NotificationsService } from './notifications.service';

describe('NotificationsService', () => {
  let service: NotificationsService;

  const httpServiceMock = {
    post: jest.fn(),
  };

  const configServiceMock = {
    get: jest.fn(),
  };

  const notificationsRepositoryMock = {
    createAttempt: jest.fn(),
  };

  beforeEach(() => {
    service = new NotificationsService(
      httpServiceMock as unknown as HttpService,
      configServiceMock as unknown as ConfigService,
      notificationsRepositoryMock as unknown as NotificationsRepository,
    );

    jest.clearAllMocks();
  });

  it('should send the notification and register one successful attempt', async () => {
    const archivedAt = new Date('2026-08-26T23:07:37.473Z');

    configServiceMock.get.mockReturnValue('https://httpbin.org/post');
    httpServiceMock.post.mockReturnValue(of({ status: 200 }));
    notificationsRepositoryMock.createAttempt.mockResolvedValue(undefined);

    await service.sendTaskArchived({
      taskId: 'task-id',
      title: 'Test task',
      archivedAt,
    });

    expect(httpServiceMock.post).toHaveBeenCalledTimes(1);
    expect(httpServiceMock.post).toHaveBeenCalledWith(
      'https://httpbin.org/post',
      {
        taskId: 'task-id',
        title: 'Test task',
        archivedAt: archivedAt.toISOString(),
      },
    );

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenCalledWith(
      'task-id',
      1,
      200,
    );
  });

  it('should retry up to three times on 5xx responses', async () => {
    configServiceMock.get.mockReturnValue('https://httpbin.org/post');

    const serverError = new AxiosError('Server error');

    Object.assign(serverError, {
      response: {
        status: 500,
      },
    });

    httpServiceMock.post
      .mockReturnValueOnce(throwError(() => serverError))
      .mockReturnValueOnce(throwError(() => serverError))
      .mockReturnValueOnce(of({ status: 200 }));

    notificationsRepositoryMock.createAttempt.mockResolvedValue(undefined);

    jest.useFakeTimers();

    const promise = service.sendTaskArchived({
      taskId: 'task-id',
      title: 'Test task',
      archivedAt: new Date('2026-08-26T23:07:37.473Z'),
    });

    await jest.runAllTimersAsync();
    await promise;

    expect(httpServiceMock.post).toHaveBeenCalledTimes(3);

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      1,
      'task-id',
      1,
      500,
    );

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      2,
      'task-id',
      2,
      500,
    );

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      3,
      'task-id',
      3,
      200,
    );

    jest.useRealTimers();
  });

  it('should retry three times when the destination does not respond', async () => {
    configServiceMock.get.mockReturnValue('https://httpbin.org/post');

    const networkError = new AxiosError('Network error');

    httpServiceMock.post.mockReturnValue(throwError(() => networkError));

    notificationsRepositoryMock.createAttempt.mockResolvedValue(undefined);

    jest.useFakeTimers();

    const promise = service.sendTaskArchived({
      taskId: 'task-id',
      title: 'Test task',
      archivedAt: new Date('2026-08-26T23:07:37.473Z'),
    });

    await jest.runAllTimersAsync();
    await promise;

    expect(httpServiceMock.post).toHaveBeenCalledTimes(3);

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      1,
      'task-id',
      1,
      undefined,
    );

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      2,
      'task-id',
      2,
      undefined,
    );

    expect(notificationsRepositoryMock.createAttempt).toHaveBeenNthCalledWith(
      3,
      'task-id',
      3,
      undefined,
    );

    jest.useRealTimers();
  });
});
