import { IdempotencyRepository } from './idempotency.repository';
export declare class IdempotencyService {
    private readonly idempotencyRepository;
    constructor(idempotencyRepository: IdempotencyRepository);
    createRequestHash(body: unknown): string;
    findExisting(key: string, endpoint: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        statusCode: number | null;
        key: string;
        endpoint: string;
        requestHash: string;
        responseBody: import("@prisma/client/runtime/client").JsonValue | null;
    } | null>;
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
    waitForCompletion(key: string, endpoint: string, maxAttempts?: number, delayMs?: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        statusCode: number | null;
        key: string;
        endpoint: string;
        requestHash: string;
        responseBody: import("@prisma/client/runtime/client").JsonValue | null;
    } | null>;
}
