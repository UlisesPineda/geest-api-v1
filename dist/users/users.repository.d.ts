import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): import("../generated/prisma/models").Prisma__UserClient<{
        id: string;
        name: string;
        lastName: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(pagination?: PaginationDto): Promise<{
        data: ({
            assignments: ({
                task: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    title: string;
                    description: string | null;
                    status: import("../generated/prisma/enums").TaskStatus;
                    archivedAt: Date | null;
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
            name: string;
            lastName: string;
            email: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): import("../generated/prisma/models").Prisma__UserClient<{
        id: string;
        name: string;
        lastName: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByIds(ids: string[]): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        name: string;
        lastName: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
