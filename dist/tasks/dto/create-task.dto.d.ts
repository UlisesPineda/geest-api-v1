import { TaskStatus } from '../../generated/prisma/enums';
export declare class CreateTaskDto {
    title: string;
    description?: string;
    status?: TaskStatus;
}
