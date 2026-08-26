import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { AssignTaskDto } from './dto/assign-task.dto';
import { CompleteTaskDto } from './dto/complete-task.dto';
import { TasksQueryDto } from './dto/tasks-query.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@Query() query: TasksQueryDto) {
    return this.tasksService.findAll(query.status, query);
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.tasksService.findOne(id);
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
