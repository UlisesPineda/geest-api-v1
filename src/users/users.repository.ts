import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(pagination: PaginationDto = new PaginationDto()) {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.user.findMany({
        include: {
          assignments: {
            where: {
              completed: false,
              task: {
                status: 'open',
              },
            },
            include: {
              task: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.user.count(),
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

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  findByIds(ids: string[]) {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  findTasksByUserId(userId: string) {
    return this.prisma.taskAssignment.findMany({
      where: {
        userId,
      },
      include: {
        task: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
