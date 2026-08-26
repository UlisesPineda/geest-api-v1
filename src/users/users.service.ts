import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll(pagination?: PaginationDto) {
    return this.usersRepository.findAll(pagination);
  }

  findByIds(ids: string[]) {
    return this.usersRepository.findByIds(ids);
  }

  async findTasks(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    const assignments = await this.usersRepository.findTasksByUserId(id);
    return assignments.map((assignment) => ({
      id: assignment.task.id,
      title: assignment.task.title,
      description: assignment.task.description,
      status: assignment.task.status,
      completed: assignment.completed,
      completedAt: assignment.completedAt,
    }));
  }
}
