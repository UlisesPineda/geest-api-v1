import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  createAttempt(taskId: string, attempt: number, statusCode?: number) {
    return this.prisma.notificationAttempt.create({
      data: {
        taskId,
        attempt,
        statusCode,
      },
    });
  }
}
