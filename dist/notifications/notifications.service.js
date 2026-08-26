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
exports.NotificationsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_2 = require("axios");
const rxjs_1 = require("rxjs");
const notifications_repository_1 = require("./notifications.repository");
let NotificationsService = class NotificationsService {
    httpService;
    configService;
    notificationsRepository;
    maxAttempts = 3;
    constructor(httpService, configService, notificationsRepository) {
        this.httpService = httpService;
        this.configService = configService;
        this.notificationsRepository = notificationsRepository;
    }
    async sendTaskArchived(notification) {
        const notifyUrl = this.configService.get('NOTIFY_URL');
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
                const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(notifyUrl, payload));
                await this.notificationsRepository.createAttempt(notification.taskId, attempt, response.status);
                return;
            }
            catch (error) {
                const statusCode = error instanceof axios_2.AxiosError ? error.response?.status : undefined;
                await this.notificationsRepository.createAttempt(notification.taskId, attempt, statusCode);
                const shouldRetry = statusCode === undefined || statusCode >= 500;
                if (!shouldRetry || attempt === this.maxAttempts) {
                    return;
                }
                await this.delay(attempt * 1000);
            }
        }
    }
    delay(milliseconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
        });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService,
        notifications_repository_1.NotificationsRepository])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map