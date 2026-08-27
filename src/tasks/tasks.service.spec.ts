import { Test, TestingModule } from '@nestjs/testing';

import { NotificationsService } from '../notifications/notifications.service';
import { UsersService } from '../users/users.service';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  const tasksRepositoryMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAssignment: jest.fn(),
    completeAssignmentTransaction: jest.fn(),
    assignUsers: jest.fn(),
    findAssignmentsByTaskAndUsers: jest.fn(),
  };
  const usersServiceMock = {
    findByIds: jest.fn(),
  };

  const notificationsServiceMock = {
    sendTaskArchived: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useValue: tasksRepositoryMock,
        },
        {
          provide: UsersService,
          useValue: usersServiceMock,
        },
        {
          provide: NotificationsService,
          useValue: notificationsServiceMock,
        },
      ],
    }).compile();
    service = module.get<TasksService>(TasksService);
    jest.clearAllMocks();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a task', async () => {
    const createTaskDto = {
      title: 'Test task',
      description: 'Test description',
    };

    const expectedTask = {
      id: 'task-id',
      ...createTaskDto,
      status: 'open',
      archivedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    tasksRepositoryMock.create.mockResolvedValue(expectedTask);

    const result = await service.create(createTaskDto);

    expect(tasksRepositoryMock.create).toHaveBeenCalledWith(createTaskDto);
    expect(result).toEqual(expectedTask);
  });

  it('should throw NotFoundException when task does not exist', async () => {
    tasksRepositoryMock.findOne.mockResolvedValue(null);

    await expect(service.findOne('missing-task-id')).rejects.toThrow(
      'Task with id missing-task-id not found',
    );

    expect(tasksRepositoryMock.findOne).toHaveBeenCalledWith('missing-task-id');
  });

  it('should reject completion when user is not assigned to the task', async () => {
    const taskId = 'task-id';
    const userId = 'user-id';

    tasksRepositoryMock.findOne.mockResolvedValue({
      id: taskId,
      title: 'Test task',
    });

    usersServiceMock.findByIds.mockResolvedValue([
      {
        id: userId,
        name: 'Test',
        lastName: 'User',
        email: 'test.user@example.com',
      },
    ]);
    tasksRepositoryMock.findAssignment.mockResolvedValue(null);

    await expect(service.complete(taskId, { userId })).rejects.toThrow(
      'User is not assigned to this task',
    );

    expect(
      tasksRepositoryMock.completeAssignmentTransaction,
    ).not.toHaveBeenCalled();
    expect(notificationsServiceMock.sendTaskArchived).not.toHaveBeenCalled();
  });

  it('should notify when completing the assignment archives the task', async () => {
    const taskId = 'task-id';
    const userId = 'user-id';
    const archivedAt = new Date('2026-08-27T17:03:51.110Z');

    tasksRepositoryMock.findOne
      .mockResolvedValueOnce({
        id: taskId,
        title: 'Test task',
        status: 'open',
      })
      .mockResolvedValueOnce({
        id: taskId,
        title: 'Test task',
        status: 'archived',
        archivedAt,
      });

    usersServiceMock.findByIds.mockResolvedValue([
      {
        id: userId,
        name: 'Test',
        lastName: 'User',
        email: 'test.user@example.com',
      },
    ]);

    tasksRepositoryMock.findAssignment.mockResolvedValue({
      id: 'assignment-id',
      taskId,
      userId,
      completed: false,
    });

    tasksRepositoryMock.completeAssignmentTransaction.mockResolvedValue({
      completedAt: archivedAt,
      alreadyCompleted: false,
      archivedNow: true,
      status: 'archived',
      archivedAt,
    });

    notificationsServiceMock.sendTaskArchived.mockResolvedValue(undefined);

    const result = await service.complete(taskId, { userId });

    expect(
      tasksRepositoryMock.completeAssignmentTransaction,
    ).toHaveBeenCalledWith(taskId, 'assignment-id');

    expect(notificationsServiceMock.sendTaskArchived).toHaveBeenCalledWith({
      taskId,
      title: 'Test task',
      archivedAt,
    });

    expect(result).toEqual({
      success: true,
      message: 'Task participation completed and task archived successfully',
      data: {
        taskId,
        user: {
          id: userId,
          name: 'Test',
          lastName: 'User',
          email: 'test.user@example.com',
        },
        participation: {
          completed: true,
          completedAt: archivedAt,
          alreadyCompleted: false,
        },
        task: {
          status: 'archived',
          archivedAt,
        },
        notificationTriggered: true,
      },
    });
  });

  it('should not notify when the task is not archived yet', async () => {
    const taskId = 'task-id';
    const userId = 'user-id';
    const completedAt = new Date('2026-08-27T17:03:51.110Z');

    tasksRepositoryMock.findOne.mockResolvedValue({
      id: taskId,
      title: 'Test task',
      status: 'open',
    });

    usersServiceMock.findByIds.mockResolvedValue([
      {
        id: userId,
        name: 'Test',
        lastName: 'User',
        email: 'test.user@example.com',
      },
    ]);
    tasksRepositoryMock.findAssignment.mockResolvedValue({
      id: 'assignment-id',
      taskId,
      userId,
      completed: false,
    });

    tasksRepositoryMock.completeAssignmentTransaction.mockResolvedValue({
      completedAt,
      alreadyCompleted: false,
      archivedNow: false,
      status: 'open',
      archivedAt: null,
    });

    const result = await service.complete(taskId, { userId });

    expect(
      tasksRepositoryMock.completeAssignmentTransaction,
    ).toHaveBeenCalledWith(taskId, 'assignment-id');

    expect(notificationsServiceMock.sendTaskArchived).not.toHaveBeenCalled();

    expect(result).toEqual({
      success: true,
      message: 'Task participation completed successfully',
      data: {
        taskId,
        user: {
          id: userId,
          name: 'Test',
          lastName: 'User',
          email: 'test.user@example.com',
        },
        participation: {
          completed: true,
          completedAt,
          alreadyCompleted: false,
        },
        task: {
          status: 'open',
          archivedAt: null,
        },
        notificationTriggered: false,
      },
    });
  });

  it('should reject assigning users to an archived task', async () => {
    const taskId = 'task-id';
    const userId = 'user-id';

    tasksRepositoryMock.findOne.mockResolvedValue({
      id: taskId,
      title: 'Archived task',
      description: null,
      status: 'archived',
      archivedAt: new Date(),
    });

    await expect(
      service.assign(taskId, {
        userIds: [userId],
      }),
    ).rejects.toThrow('Archived tasks cannot receive new assignments');

    expect(usersServiceMock.findByIds).not.toHaveBeenCalled();
    expect(tasksRepositoryMock.assignUsers).not.toHaveBeenCalled();
  });
});
