import { IsEnum, IsOptional } from 'class-validator';

import { TaskStatus } from '../../generated/prisma/enums';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class TasksQueryDto extends PaginationDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
