import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { NotificationsRepository } from './notifications.repository';
interface TaskArchivedNotification {
    taskId: string;
    title: string;
    archivedAt: Date;
}
export declare class NotificationsService {
    private readonly httpService;
    private readonly configService;
    private readonly notificationsRepository;
    private readonly maxAttempts;
    constructor(httpService: HttpService, configService: ConfigService, notificationsRepository: NotificationsRepository);
    sendTaskArchived(notification: TaskArchivedNotification): Promise<void>;
    private delay;
}
export {};
