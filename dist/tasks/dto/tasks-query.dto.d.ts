import { TaskStatus } from '../../generated/prisma/enums';
import { PaginationDto } from '../../common/dto/pagination.dto';
export declare class TasksQueryDto extends PaginationDto {
    status?: TaskStatus;
}
