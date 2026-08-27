import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { UsersService } from '../users/users.service';
import { BadRequestException } from '@nestjs/common';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CompleteTaskDto } from './dto/complete-task.dto';
import { NotificationsService } from '../notifications/notifications.service';
import { TaskStatus } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class TasksService {
  constructor(
    private readonly tasksRepository: TasksRepository,
    private readonly usersService: UsersService,
    private readonly notificationsService: NotificationsService,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  findAll(status?: TaskStatus, pagination?: PaginationDto) {
    return this.tasksRepository.findAll(status, pagination);
  }

  async findOne(id: string) {
    const task = await this.tasksRepository.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  async assign(id: string, assignTaskDto: AssignTaskDto) {
    await this.findOne(id);

    const uniqueUserIds = [...new Set(assignTaskDto.userIds)];
    const users = await this.usersService.findByIds(uniqueUserIds);

    if (users.length !== uniqueUserIds.length) {
      throw new BadRequestException('One or more users do not exist');
    }

    const existingAssignments =
      await this.tasksRepository.findAssignmentsByTaskAndUsers(
        id,
        uniqueUserIds,
      );

    const existingUserIds = new Set(
      existingAssignments.map((assignment) => assignment.userId),
    );

    const newUserIds = uniqueUserIds.filter(
      (userId) => !existingUserIds.has(userId),
    );

    if (newUserIds.length > 0) {
      await this.tasksRepository.assignUsers(id, newUserIds);
    }

    const assignments =
      await this.tasksRepository.findAssignmentsByTaskAndUsers(
        id,
        uniqueUserIds,
      );

    const newUserIdSet = new Set(newUserIds);

    return {
      success: true,
      message: 'Users assignment processed successfully',
      data: {
        taskId: id,
        assigned: assignments
          .filter((assignment) => newUserIdSet.has(assignment.userId))
          .map((assignment) => ({
            user: {
              id: assignment.user.id,
              name: assignment.user.name,
              lastName: assignment.user.lastName,
              email: assignment.user.email,
            },
            assignedAt: assignment.createdAt,
          })),
        alreadyAssigned: existingAssignments.map((assignment) => ({
          id: assignment.user.id,
          name: assignment.user.name,
          lastName: assignment.user.lastName,
          email: assignment.user.email,
        })),
      },
    };
  }

  async complete(id: string, completeTaskDto: CompleteTaskDto) {
    await this.findOne(id);

    const users = await this.usersService.findByIds([completeTaskDto.userId]);

    if (users.length === 0) {
      throw new BadRequestException('User does not exist');
    }

    const user = users[0];

    const assignment = await this.tasksRepository.findAssignment(
      id,
      completeTaskDto.userId,
    );

    if (!assignment) {
      throw new BadRequestException('User is not assigned to this task');
    }

    const result = await this.tasksRepository.completeAssignmentTransaction(
      id,
      assignment.id,
    );

    if (result.archivedNow && result.archivedAt) {
      const task = await this.findOne(id);

      await this.notificationsService.sendTaskArchived({
        taskId: task.id,
        title: task.title,
        archivedAt: result.archivedAt,
      });
    }

    return {
      success: true,
      message: result.archivedNow
        ? 'Task participation completed and task archived successfully'
        : 'Task participation completed successfully',
      data: {
        taskId: id,
        user: {
          id: user.id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
        },
        participation: {
          completed: true,
          completedAt: result.completedAt,
          alreadyCompleted: result.alreadyCompleted,
        },
        task: {
          status: result.status,
          archivedAt: result.archivedAt,
        },
        notificationTriggered: result.archivedNow,
      },
    };
  }

  async findNotifications(id: string) {
    await this.findOne(id);

    return this.tasksRepository.findNotificationAttempts(id);
  }
}
