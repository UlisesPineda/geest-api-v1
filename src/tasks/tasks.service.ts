import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { UsersService } from '../users/users.service';
import { BadRequestException } from '@nestjs/common';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CompleteTaskDto } from './dto/complete-task.dto';
import { NotificationsService } from '../notifications/notifications.service';
import { TaskStatus } from '../generated/prisma/enums';

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

  findAll(status?: TaskStatus) {
    return this.tasksRepository.findAll(status);
  }

  async findOne(id: string) {
    const task = await this.tasksRepository.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.tasksRepository.remove(id);
  }

  async assign(id: string, assignTaskDto: AssignTaskDto) {
    await this.findOne(id);

    const uniqueUserIds = [...new Set(assignTaskDto.userIds)];
    const users = await this.usersService.findByIds(uniqueUserIds);

    if (users.length !== uniqueUserIds.length) {
      throw new BadRequestException('One or more users do not exist');
    }

    await this.tasksRepository.assignUsers(id, uniqueUserIds);

    return {
      message: 'Users assigned successfully',
    };
  }

  async complete(id: string, completeTaskDto: CompleteTaskDto) {
    await this.findOne(id);

    const users = await this.usersService.findByIds([completeTaskDto.userId]);

    if (users.length === 0) {
      throw new BadRequestException('User does not exist');
    }

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

    if (result.archived && result.archivedAt) {
      const task = await this.findOne(id);

      await this.notificationsService.sendTaskArchived({
        taskId: task.id,
        title: task.title,
        archivedAt: result.archivedAt,
      });
    }

    return {
      message: 'Task participation completed successfully',
    };
  }

  async findNotifications(id: string) {
    await this.findOne(id);

    return this.tasksRepository.findNotificationAttempts(id);
  }
}
