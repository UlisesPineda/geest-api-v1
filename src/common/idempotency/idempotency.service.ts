import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';

import { IdempotencyRepository } from './idempotency.repository';

@Injectable()
export class IdempotencyService {
  constructor(private readonly idempotencyRepository: IdempotencyRepository) {}

  createRequestHash(body: unknown): string {
    const canonicalBody = this.canonicalize(body);
    const payload = JSON.stringify(canonicalBody);

    return createHash('sha256').update(payload).digest('hex');
  }

  async findExisting(key: string, endpoint: string) {
    return this.idempotencyRepository.findByKeyAndEndpoint(key, endpoint);
  }

  create(key: string, endpoint: string, requestHash: string) {
    return this.idempotencyRepository.create(key, endpoint, requestHash);
  }

  complete(id: string, statusCode: number, responseBody: object) {
    return this.idempotencyRepository.complete(id, statusCode, responseBody);
  }

  reserve(key: string, endpoint: string, requestHash: string) {
    return this.idempotencyRepository.reserve(key, endpoint, requestHash);
  }

  async waitForCompletion(
    key: string,
    endpoint: string,
    maxAttempts = 250,
    delayMs = 100,
  ) {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const record = await this.idempotencyRepository.findByKeyAndEndpoint(
        key,
        endpoint,
      );

      if (record?.completed) {
        return record;
      }

      await new Promise<void>((resolve) => setTimeout(resolve, delayMs));
    }

    return null;
  }

  private canonicalize(value: unknown): unknown {
    if (Array.isArray(value)) {
      return value.map((item) => this.canonicalize(item));
    }

    if (value !== null && typeof value === 'object') {
      return Object.keys(value)
        .sort()
        .reduce<Record<string, unknown>>((result, key) => {
          const objectValue = value as Record<string, unknown>;

          result[key] = this.canonicalize(objectValue[key]);

          return result;
        }, {});
    }

    return value;
  }
}
