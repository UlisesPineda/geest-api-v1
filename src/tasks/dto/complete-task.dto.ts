import { IsUUID } from 'class-validator';

export class CompleteTaskDto {
  @IsUUID('4')
  userId!: string;
}
