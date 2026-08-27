import { Test, TestingModule } from '@nestjs/testing';

import { IdempotencyRepository } from './idempotency.repository';
import { IdempotencyService } from './idempotency.service';

describe('IdempotencyService', () => {
  let service: IdempotencyService;

  const idempotencyRepositoryMock = {
    findByKeyAndEndpoint: jest.fn(),
    create: jest.fn(),
    complete: jest.fn(),
    reserve: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        IdempotencyService,
        {
          provide: IdempotencyRepository,
          useValue: idempotencyRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<IdempotencyService>(IdempotencyService);

    jest.clearAllMocks();
  });

  it('should generate the same hash for the same request body', () => {
    const body = {
      name: 'Ana',
      email: 'ana@example.com',
    };

    const firstHash = service.createRequestHash(body);
    const secondHash = service.createRequestHash(body);

    expect(firstHash).toBe(secondHash);
    expect(firstHash).toHaveLength(64);
  });

  it('should return the record when a concurrent request completes', async () => {
    const completedRecord = {
      id: 'record-id',
      key: 'test-key',
      endpoint: '/tasks',
      requestHash: 'hash',
      completed: true,
      statusCode: 201,
      responseBody: { id: 'task-id' },
    };

    idempotencyRepositoryMock.findByKeyAndEndpoint
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce(completedRecord);

    const result = await service.waitForCompletion('test-key', '/tasks', 2, 0);

    expect(result).toEqual(completedRecord);
    expect(
      idempotencyRepositoryMock.findByKeyAndEndpoint,
    ).toHaveBeenCalledTimes(2);
  });

  it('should wait until an idempotency request is completed', async () => {
    const key = 'parallel-request-key';
    const endpoint = '/tasks/task-id/complete';

    const pendingRecord = {
      id: 'record-id',
      key,
      endpoint,
      requestHash: 'request-hash',
      completed: false,
      statusCode: null,
      responseBody: null,
    };

    const completedRecord = {
      ...pendingRecord,
      completed: true,
      statusCode: 200,
      responseBody: {
        success: true,
        message: 'Task participation completed successfully',
      },
    };

    idempotencyRepositoryMock.findByKeyAndEndpoint
      .mockResolvedValueOnce(pendingRecord)
      .mockResolvedValueOnce(pendingRecord)
      .mockResolvedValueOnce(completedRecord);

    const result = await service.waitForCompletion(key, endpoint, 5, 1);

    expect(
      idempotencyRepositoryMock.findByKeyAndEndpoint,
    ).toHaveBeenCalledTimes(3);

    expect(result).toEqual(completedRecord);
  });

  it('should generate the same hash for objects with the same data in different key order', () => {
    const firstBody = {
      name: 'Ana',
      lastName: 'García',
      email: 'ana@example.com',
    };

    const secondBody = {
      email: 'ana@example.com',
      name: 'Ana',
      lastName: 'García',
    };

    const firstHash = service.createRequestHash(firstBody);
    const secondHash = service.createRequestHash(secondBody);

    expect(firstHash).toBe(secondHash);
  });

  it('should preserve array order when generating the request hash', () => {
    const firstBody = {
      userIds: ['user-1', 'user-2'],
    };

    const secondBody = {
      userIds: ['user-2', 'user-1'],
    };

    const firstHash = service.createRequestHash(firstBody);
    const secondHash = service.createRequestHash(secondBody);

    expect(firstHash).not.toBe(secondHash);
  });
});
