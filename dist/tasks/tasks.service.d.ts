import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { UsersService } from '../users/users.service';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CompleteTaskDto } from './dto/complete-task.dto';
import { NotificationsService } from '../notifications/notifications.service';
import { TaskStatus } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class TasksService {
    private readonly tasksRepository;
    private readonly usersService;
    private readonly notificationsService;
    constructor(tasksRepository: TasksRepository, usersService: UsersService, notificationsService: NotificationsService);
    create(createTaskDto: CreateTaskDto): import("../generated/prisma/models").Prisma__TaskClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        status: TaskStatus;
        archivedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(status?: TaskStatus, pagination?: PaginationDto): Promise<{
        data: ({
            assignments: ({
                user: {
                    id: string;
                    name: string;
                    lastName: string;
                    email: string;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                taskId: string;
                userId: string;
                completed: boolean;
                completedAt: Date | null;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            status: TaskStatus;
            archivedAt: Date | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        assignments: ({
            user: {
                id: string;
                name: string;
                lastName: string;
                email: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            taskId: string;
            userId: string;
            completed: boolean;
            completedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        status: TaskStatus;
        archivedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        status: TaskStatus;
        archivedAt: Date | null;
    }>;
    assign(id: string, assignTaskDto: AssignTaskDto): Promise<{
        message: string;
    }>;
    complete(id: string, completeTaskDto: CompleteTaskDto): Promise<{
        message: string;
    }>;
    findNotifications(id: string): Promise<{
        id: string;
        createdAt: Date;
        taskId: string;
        attempt: number;
        statusCode: number | null;
    }[]>;
}
