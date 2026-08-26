import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from '../generated/prisma/enums';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class TasksRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateTaskDto): import("../generated/prisma/models").Prisma__TaskClient<{
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
    findOne(id: string): import("../generated/prisma/models").Prisma__TaskClient<({
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
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../generated/prisma/models").Prisma__TaskClient<{
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
    assignUsers(taskId: string, userIds: string[]): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
    findAssignment(taskId: string, userId: string): import("../generated/prisma/models").Prisma__TaskAssignmentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        taskId: string;
        userId: string;
        completed: boolean;
        completedAt: Date | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    completeAssignment(id: string): import("../generated/prisma/models").Prisma__TaskAssignmentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        taskId: string;
        userId: string;
        completed: boolean;
        completedAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    countPendingAssignments(taskId: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
    archiveIfOpen(taskId: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
    runInTransaction<T>(callback: (tx: Parameters<Parameters<PrismaService['$transaction']>[0]>[0]) => Promise<T>): Promise<T>;
    completeAssignmentTransaction(taskId: string, assignmentId: string): Promise<{
        archived: boolean;
        archivedAt?: undefined;
    } | {
        archived: boolean;
        archivedAt: Date | null;
    }>;
    createNotificationAttempt(taskId: string, attempt: number, statusCode?: number): import("../generated/prisma/models").Prisma__NotificationAttemptClient<{
        id: string;
        createdAt: Date;
        taskId: string;
        attempt: number;
        statusCode: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findNotificationAttempts(taskId: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        taskId: string;
        attempt: number;
        statusCode: number | null;
    }[]>;
}
