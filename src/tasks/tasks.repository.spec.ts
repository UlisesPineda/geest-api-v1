import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { TasksRepository } from './tasks.repository';

describe('TasksRepository', () => {
  const prismaMock = {
    $transaction: jest.fn(),
  };

  let repository: TasksRepository;

  beforeEach(() => {
    repository = new TasksRepository(prismaMock as unknown as PrismaService);

    jest.clearAllMocks();
  });

  it('should retry a serializable transaction on P2034 and eventually succeed', async () => {
    const transactionError = new Prisma.PrismaClientKnownRequestError(
      'Transaction conflict',
      {
        code: 'P2034',
        clientVersion: '7.10.0',
      },
    );

    prismaMock.$transaction
      .mockRejectedValueOnce(transactionError)
      .mockRejectedValueOnce(transactionError)
      .mockResolvedValueOnce('success');

    const callback = jest.fn();

    const result = await repository.runInTransaction(callback);

    expect(result).toBe('success');

    expect(prismaMock.$transaction).toHaveBeenCalledTimes(3);
  });

  it('should throw after exhausting P2034 retries', async () => {
    const transactionError = new Prisma.PrismaClientKnownRequestError(
      'Transaction conflict',
      {
        code: 'P2034',
        clientVersion: '7.10.0',
      },
    );

    prismaMock.$transaction.mockRejectedValue(transactionError);

    const callback = jest.fn();

    await expect(repository.runInTransaction(callback)).rejects.toThrow(
      transactionError,
    );

    expect(prismaMock.$transaction).toHaveBeenCalledTimes(3);
  });
});
