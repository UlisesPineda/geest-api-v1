import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';

import { NotificationsRepository } from './notifications.repository';

interface TaskArchivedNotification {
  taskId: string;
  title: string;
  archivedAt: Date;
}

@Injectable()
export class NotificationsService {
  private readonly maxAttempts = 3;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async sendTaskArchived(
    notification: TaskArchivedNotification,
  ): Promise<void> {
    const notifyUrl = this.configService.get<string>('NOTIFY_URL');

    if (!notifyUrl) {
      throw new Error('NOTIFY_URL is not configured');
    }

    const payload = {
      taskId: notification.taskId,
      title: notification.title,
      archivedAt: notification.archivedAt.toISOString(),
    };

    for (let attempt = 1; attempt <= this.maxAttempts; attempt++) {
      try {
        const response = await firstValueFrom(
          this.httpService.post(notifyUrl, payload),
        );

        await this.notificationsRepository.createAttempt(
          notification.taskId,
          attempt,
          response.status,
        );

        return;
      } catch (error: unknown) {
        const statusCode =
          error instanceof AxiosError ? error.response?.status : undefined;

        await this.notificationsRepository.createAttempt(
          notification.taskId,
          attempt,
          statusCode,
        );

        const shouldRetry = statusCode === undefined || statusCode >= 500;

        if (!shouldRetry || attempt === this.maxAttempts) {
          return;
        }

        await this.delay(attempt * 1000);
      }
    }
  }

  private delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
}
