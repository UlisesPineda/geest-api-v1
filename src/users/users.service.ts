import { Injectable } from '@nestjs/common';

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
}
