import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CompleteTaskDto } from './dto/complete-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.tasksService.remove(id);
  }

  @Post(':id/assign')
  assign(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() assignTaskDto: AssignTaskDto,
  ) {
    return this.tasksService.assign(id, assignTaskDto);
  }

  @Post(':id/complete')
  complete(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() completeTaskDto: CompleteTaskDto,
  ) {
    return this.tasksService.complete(id, completeTaskDto);
  }

  @Get(':id/notifications')
  findNotifications(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.tasksService.findNotifications(id);
  }
}
