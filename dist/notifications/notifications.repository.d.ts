import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAttempt(taskId: string, attempt: number, statusCode?: number): import("../generated/prisma/models").Prisma__NotificationAttemptClient<{
        id: string;
        createdAt: Date;
        taskId: string;
        attempt: number;
        statusCode: number | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
