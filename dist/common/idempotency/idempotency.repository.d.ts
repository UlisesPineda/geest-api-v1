import { PrismaService } from '../../prisma/prisma.service';
export declare class IdempotencyRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByKeyAndEndpoint(key: string, endpoint: string): import("../../generated/prisma/models").Prisma__IdempotencyRecordClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        statusCode: number | null;
        key: string;
        endpoint: string;
        requestHash: string;
        responseBody: import("@prisma/client/runtime/client").JsonValue | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    create(key: string, endpoint: string, requestHash: string): import("../../generated/prisma/models").Prisma__IdempotencyRecordClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        statusCode: number | null;
        key: string;
        endpoint: string;
        requestHash: string;
        responseBody: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    complete(id: string, statusCode: number, responseBody: object): import("../../generated/prisma/models").Prisma__IdempotencyRecordClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        statusCode: number | null;
        key: string;
        endpoint: string;
        requestHash: string;
        responseBody: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    reserve(key: string, endpoint: string, requestHash: string): Promise<{
        record: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            completed: boolean;
            statusCode: number | null;
            key: string;
            endpoint: string;
            requestHash: string;
            responseBody: import("@prisma/client/runtime/client").JsonValue | null;
        };
        created: boolean;
    }>;
}
