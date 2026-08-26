import { Global, Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { IdempotencyRepository } from './idempotency.repository';
import { IdempotencyService } from './idempotency.service';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [IdempotencyRepository, IdempotencyService],
  exports: [IdempotencyService],
})
export class IdempotencyModule {}
