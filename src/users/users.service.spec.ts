import { Test, TestingModule } from '@nestjs/testing';

import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  const usersRepositoryMock = {
    findOne: jest.fn(),
    findTasksByUserId: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: usersRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);

    jest.clearAllMocks();
  });

  it('should return assigned tasks with completion status', async () => {
    const userId = 'user-id';

    usersRepositoryMock.findOne.mockResolvedValue({
      id: userId,
      name: 'Ana',
    });

    usersRepositoryMock.findTasksByUserId.mockResolvedValue([
      {
        completed: true,
        completedAt: new Date('2026-08-26T15:09:12.675Z'),
        task: {
          id: 'task-id',
          title: 'Test task',
          description: 'Test description',
          status: 'archived',
        },
      },
    ]);

    const result = await service.findTasks(userId);

    expect(result).toEqual([
      {
        id: 'task-id',
        title: 'Test task',
        description: 'Test description',
        status: 'archived',
        completed: true,
        completedAt: new Date('2026-08-26T15:09:12.675Z'),
      },
    ]);

    expect(usersRepositoryMock.findTasksByUserId).toHaveBeenCalledWith(userId);
  });

  it('should throw NotFoundException when user does not exist', async () => {
    const userId = 'missing-user-id';

    usersRepositoryMock.findOne.mockResolvedValue(null);

    await expect(service.findTasks(userId)).rejects.toThrow(
      'User with id missing-user-id not found',
    );

    expect(usersRepositoryMock.findTasksByUserId).not.toHaveBeenCalled();
  });
});
