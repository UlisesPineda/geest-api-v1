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
});
