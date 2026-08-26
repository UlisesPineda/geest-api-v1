"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const pagination_dto_1 = require("../common/dto/pagination.dto");
let TasksRepository = class TasksRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(data) {
        return this.prisma.task.create({ data });
    }
    async findAll(status, pagination = new pagination_dto_1.PaginationDto()) {
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
    findOne(id) {
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
    remove(id) {
        return this.prisma.task.delete({
            where: { id },
        });
    }
    assignUsers(taskId, userIds) {
        return this.prisma.taskAssignment.createMany({
            data: userIds.map((userId) => ({
                taskId,
                userId,
            })),
            skipDuplicates: true,
        });
    }
    findAssignment(taskId, userId) {
        return this.prisma.taskAssignment.findUnique({
            where: {
                taskId_userId: {
                    taskId,
                    userId,
                },
            },
        });
    }
    completeAssignment(id) {
        return this.prisma.taskAssignment.update({
            where: { id },
            data: {
                completed: true,
                completedAt: new Date(),
            },
        });
    }
    countPendingAssignments(taskId) {
        return this.prisma.taskAssignment.count({
            where: {
                taskId,
                completed: false,
            },
        });
    }
    archiveIfOpen(taskId) {
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
    runInTransaction(callback) {
        return this.prisma.$transaction(callback, {
            isolationLevel: 'Serializable',
        });
    }
    async completeAssignmentTransaction(taskId, assignmentId) {
        return this.runInTransaction(async (tx) => {
            const assignment = await tx.taskAssignment.findUnique({
                where: { id: assignmentId },
            });
            if (assignment && !assignment.completed) {
                await tx.taskAssignment.update({
                    where: { id: assignmentId },
                    data: {
                        completed: true,
                        completedAt: new Date(),
                    },
                });
            }
            const pendingAssignments = await tx.taskAssignment.count({
                where: {
                    taskId,
                    completed: false,
                },
            });
            if (pendingAssignments > 0) {
                return {
                    archived: false,
                };
            }
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
            return {
                archived: archiveResult.count === 1,
                archivedAt: archiveResult.count === 1 ? archivedAt : null,
            };
        });
    }
    createNotificationAttempt(taskId, attempt, statusCode) {
        return this.prisma.notificationAttempt.create({
            data: {
                taskId,
                attempt,
                statusCode,
            },
        });
    }
    findNotificationAttempts(taskId) {
        return this.prisma.notificationAttempt.findMany({
            where: {
                taskId,
            },
            orderBy: {
                attempt: 'asc',
            },
        });
    }
};
exports.TasksRepository = TasksRepository;
exports.TasksRepository = TasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksRepository);
//# sourceMappingURL=tasks.repository.js.map