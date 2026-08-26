import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class IdempotencyRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByKeyAndEndpoint(key: string, endpoint: string) {
    return this.prisma.idempotencyRecord.findUnique({
      where: {
        key_endpoint: {
          key,
          endpoint,
        },
      },
    });
  }

  create(key: string, endpoint: string, requestHash: string) {
    return this.prisma.idempotencyRecord.create({
      data: {
        key,
        endpoint,
        requestHash,
      },
    });
  }

  complete(id: string, statusCode: number, responseBody: object) {
    return this.prisma.idempotencyRecord.update({
      where: { id },
      data: {
        statusCode,
        responseBody,
        completed: true,
      },
    });
  }

  async reserve(key: string, endpoint: string, requestHash: string) {
    const result = await this.prisma.idempotencyRecord.createMany({
      data: [
        {
          key,
          endpoint,
          requestHash,
        },
      ],
      skipDuplicates: true,
    });

    const record = await this.findByKeyAndEndpoint(key, endpoint);

    if (!record) {
      throw new Error('Failed to reserve idempotency key');
    }

    return {
      record,
      created: result.count === 1,
    };
  }
}
