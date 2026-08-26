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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_repository_1 = require("./tasks.repository");
const users_service_1 = require("../users/users.service");
const common_2 = require("@nestjs/common");
const notifications_service_1 = require("../notifications/notifications.service");
let TasksService = class TasksService {
    tasksRepository;
    usersService;
    notificationsService;
    constructor(tasksRepository, usersService, notificationsService) {
        this.tasksRepository = tasksRepository;
        this.usersService = usersService;
        this.notificationsService = notificationsService;
    }
    create(createTaskDto) {
        return this.tasksRepository.create(createTaskDto);
    }
    findAll(status, pagination) {
        return this.tasksRepository.findAll(status, pagination);
    }
    async findOne(id) {
        const task = await this.tasksRepository.findOne(id);
        if (!task) {
            throw new common_1.NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }
    async remove(id) {
        await this.findOne(id);
        return this.tasksRepository.remove(id);
    }
    async assign(id, assignTaskDto) {
        await this.findOne(id);
        const uniqueUserIds = [...new Set(assignTaskDto.userIds)];
        const users = await this.usersService.findByIds(uniqueUserIds);
        if (users.length !== uniqueUserIds.length) {
            throw new common_2.BadRequestException('One or more users do not exist');
        }
        await this.tasksRepository.assignUsers(id, uniqueUserIds);
        return {
            message: 'Users assigned successfully',
        };
    }
    async complete(id, completeTaskDto) {
        await this.findOne(id);
        const users = await this.usersService.findByIds([completeTaskDto.userId]);
        if (users.length === 0) {
            throw new common_2.BadRequestException('User does not exist');
        }
        const assignment = await this.tasksRepository.findAssignment(id, completeTaskDto.userId);
        if (!assignment) {
            throw new common_2.BadRequestException('User is not assigned to this task');
        }
        const result = await this.tasksRepository.completeAssignmentTransaction(id, assignment.id);
        if (result.archived && result.archivedAt) {
            const task = await this.findOne(id);
            await this.notificationsService.sendTaskArchived({
                taskId: task.id,
                title: task.title,
                archivedAt: result.archivedAt,
            });
        }
        return {
            message: 'Task participation completed successfully',
        };
    }
    async findNotifications(id) {
        await this.findOne(id);
        return this.tasksRepository.findNotificationAttempts(id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tasks_repository_1.TasksRepository,
        users_service_1.UsersService,
        notifications_service_1.NotificationsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map