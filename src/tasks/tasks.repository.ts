import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class TasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }
  async findAll(
    status?: TaskStatus,
    pagination: PaginationDto = new PaginationDto(),
  ) {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;
    const where = status ? { status } : undefined;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.task.findMany({
        where,
        include: {
          assignments: {
            include: {
              user: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.task.count({ where }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
      include: {
        assignments: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  assignUsers(taskId: string, userIds: string[]) {
    return this.prisma.taskAssignment.createMany({
      data: userIds.map((userId) => ({
        taskId,
        userId,
      })),
      skipDuplicates: true,
    });
  }

  findAssignment(taskId: string, userId: string) {
    return this.prisma.taskAssignment.findUnique({
      where: {
        taskId_userId: {
          taskId,
          userId,
        },
      },
    });
  }

  completeAssignment(id: string) {
    return this.prisma.taskAssignment.update({
      where: { id },
      data: {
        completed: true,
        completedAt: new Date(),
      },
    });
  }

  countPendingAssignments(taskId: string) {
    return this.prisma.taskAssignment.count({
      where: {
        taskId,
        completed: false,
      },
    });
  }

  archiveIfOpen(taskId: string) {
    return this.prisma.task.updateMany({
      where: {
        id: taskId,
        status: 'open',
      },
      data: {
        status: 'archived',
        archivedAt: new Date(),
      },
    });
  }

  runInTransaction<T>(
    callback: (
      tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    ) => Promise<T>,
  ) {
    return this.prisma.$transaction(callback, {
      isolationLevel: 'Serializable',
    });
  }

  async completeAssignmentTransaction(taskId: string, assignmentId: string) {
    return this.runInTransaction(async (tx) => {
      const assignment = await tx.taskAssignment.findUnique({
        where: { id: assignmentId },
      });

      if (assignment && !assignment.completed) {
        await tx.taskAssignment.update({
          where: { id: assignmentId },
          data: {
            completed: true,
            completedAt: new Date(),
          },
        });
      }

      const pendingAssignments = await tx.taskAssignment.count({
        where: {
          taskId,
          completed: false,
        },
      });

      if (pendingAssignments > 0) {
        return {
          archived: false,
        };
      }

      const archivedAt = new Date();

      const archiveResult = await tx.task.updateMany({
        where: {
          id: taskId,
          status: 'open',
        },
        data: {
          status: 'archived',
          archivedAt,
        },
      });

      return {
        archived: archiveResult.count === 1,
        archivedAt: archiveResult.count === 1 ? archivedAt : null,
      };
    });
  }

  createNotificationAttempt(
    taskId: string,
    attempt: number,
    statusCode?: number,
  ) {
    return this.prisma.notificationAttempt.create({
      data: {
        taskId,
        attempt,
        statusCode,
      },
    });
  }

  findNotificationAttempts(taskId: string) {
    return this.prisma.notificationAttempt.findMany({
      where: {
        taskId,
      },
      orderBy: {
        attempt: 'asc',
      },
    });
  }
}
