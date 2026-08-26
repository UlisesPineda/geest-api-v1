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
exports.IdempotencyInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const idempotency_service_1 = require("./idempotency.service");
let IdempotencyInterceptor = class IdempotencyInterceptor {
    idempotencyService;
    constructor(idempotencyService) {
        this.idempotencyService = idempotencyService;
    }
    intercept(context, next) {
        const http = context.switchToHttp();
        const request = http.getRequest();
        const response = http.getResponse();
        if (request.method !== 'POST') {
            return next.handle();
        }
        const key = request.header('Idempotency-Key');
        if (!key) {
            throw new common_1.BadRequestException('Idempotency-Key header is required');
        }
        const endpoint = request.path;
        const requestHash = this.idempotencyService.createRequestHash(request.body);
        return (0, rxjs_1.from)(this.idempotencyService.reserve(key, endpoint, requestHash)).pipe((0, operators_1.switchMap)(({ record, created }) => {
            if (!created) {
                if (record.requestHash !== requestHash) {
                    throw new common_1.ConflictException('Idempotency-Key was already used with a different request body');
                }
                if (record.completed) {
                    response.status(record.statusCode ?? 200);
                    return (0, rxjs_1.of)(record.responseBody);
                }
                return (0, rxjs_1.from)(this.idempotencyService.waitForCompletion(key, endpoint)).pipe((0, operators_1.switchMap)((completedRecord) => {
                    if (!completedRecord) {
                        throw new common_1.ConflictException('Request with this Idempotency-Key is still in progress');
                    }
                    response.status(completedRecord.statusCode ?? 200);
                    return (0, rxjs_1.of)(completedRecord.responseBody);
                }));
            }
            return next
                .handle()
                .pipe((0, operators_1.switchMap)((responseBody) => (0, rxjs_1.from)(this.idempotencyService.complete(record.id, response.statusCode, responseBody)).pipe((0, operators_1.switchMap)(() => (0, rxjs_1.of)(responseBody)))));
        }));
    }
};
exports.IdempotencyInterceptor = IdempotencyInterceptor;
exports.IdempotencyInterceptor = IdempotencyInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [idempotency_service_1.IdempotencyService])
], IdempotencyInterceptor);
//# sourceMappingURL=idempotency.interceptor.js.map