import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Prisma } from '../generated/prisma/client';

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

  findAssignmentsByTaskAndUsers(taskId: string, userIds: string[]) {
    return this.prisma.taskAssignment.findMany({
      where: {
        taskId,
        userId: {
          in: userIds,
        },
      },
      include: {
        user: true,
      },
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

  async runInTransaction<T>(
    callback: (
      tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0],
    ) => Promise<T>,
  ) {
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.prisma.$transaction(callback, {
          isolationLevel: 'Serializable',
        });
      } catch (error) {
        const isRetryable =
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === 'P2034';

        if (!isRetryable || attempt === maxRetries) {
          throw error;
        }
      }
    }

    throw new Error('Transaction retry limit reached');
  }
  async completeAssignmentTransaction(taskId: string, assignmentId: string) {
    return this.runInTransaction(async (tx) => {
      const assignment = await tx.taskAssignment.findUnique({
        where: { id: assignmentId },
      });

      if (!assignment) {
        throw new Error('Task assignment not found');
      }

      const alreadyCompleted = assignment.completed;

      const completedAssignment = alreadyCompleted
        ? assignment
        : await tx.taskAssignment.update({
            where: { id: assignmentId },
            data: {
              completed: true,
              completedAt: new Date(),
            },
          });

      const pendingAssignments = await tx.taskAssignment.count({
        where: {
          taskId,
          completed: false,
        },
      });

      let archivedNow = false;

      if (pendingAssignments === 0) {
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

        archivedNow = archiveResult.count === 1;
      }

      const task = await tx.task.findUnique({
        where: { id: taskId },
      });

      if (!task) {
        throw new Error('Task not found after completion');
      }

      return {
        completedAt: completedAssignment.completedAt,
        alreadyCompleted,
        archivedNow,
        status: task.status,
        archivedAt: task.archivedAt,
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
