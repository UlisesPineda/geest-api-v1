import { TaskStatus } from '../../generated/prisma/enums';

export class CreateTaskDto {
  title!: string;
  description?: string;
  status?: TaskStatus;
}
