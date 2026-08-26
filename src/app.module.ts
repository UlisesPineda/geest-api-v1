import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { IdempotencyModule } from './common/idempotency/idempotency.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { IdempotencyInterceptor } from './common/idempotency/idempotency.interceptor';

@Module({
  // imports: [PrismaModule, TasksModule],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    TasksModule,
    UsersModule,
    NotificationsModule,
    IdempotencyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: IdempotencyInterceptor },
  ],
})
export class AppModule {}
