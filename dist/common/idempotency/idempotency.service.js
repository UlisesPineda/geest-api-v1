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
exports.IdempotencyService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const idempotency_repository_1 = require("./idempotency.repository");
let IdempotencyService = class IdempotencyService {
    idempotencyRepository;
    constructor(idempotencyRepository) {
        this.idempotencyRepository = idempotencyRepository;
    }
    createRequestHash(body) {
        const payload = JSON.stringify(body);
        return (0, crypto_1.createHash)('sha256').update(payload).digest('hex');
    }
    async findExisting(key, endpoint) {
        return this.idempotencyRepository.findByKeyAndEndpoint(key, endpoint);
    }
    create(key, endpoint, requestHash) {
        return this.idempotencyRepository.create(key, endpoint, requestHash);
    }
    complete(id, statusCode, responseBody) {
        return this.idempotencyRepository.complete(id, statusCode, responseBody);
    }
    reserve(key, endpoint, requestHash) {
        return this.idempotencyRepository.reserve(key, endpoint, requestHash);
    }
    async waitForCompletion(key, endpoint, maxAttempts = 20, delayMs = 100) {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const record = await this.idempotencyRepository.findByKeyAndEndpoint(key, endpoint);
            if (record?.completed) {
                return record;
            }
            await new Promise((resolve) => setTimeout(resolve, delayMs));
        }
        return null;
    }
};
exports.IdempotencyService = IdempotencyService;
exports.IdempotencyService = IdempotencyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [idempotency_repository_1.IdempotencyRepository])
], IdempotencyService);
//# sourceMappingURL=idempotency.service.js.map