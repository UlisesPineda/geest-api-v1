import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksRepository.create(createTaskDto);
  }

  findAll() {
    return this.tasksRepository.findAll();
  }

  async findOne(id: string) {
    const task = await this.tasksRepository.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.findOne(id);

    return this.tasksRepository.update(id, updateTaskDto);
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.tasksRepository.remove(id);
  }
}
