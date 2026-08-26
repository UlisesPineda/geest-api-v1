import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    archivedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    archivedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    archivedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    archivedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    archivedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    archivedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    status: $Enums.TaskStatus;
    archivedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    archivedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    notifications?: Prisma.NotificationAttemptListRelationFilter;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    assignments?: Prisma.TaskAssignmentOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationAttemptOrderByRelationAggregateInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    archivedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    notifications?: Prisma.NotificationAttemptListRelationFilter;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    archivedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    notifications?: Prisma.NotificationAttemptCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    notifications?: Prisma.NotificationAttemptUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    notifications?: Prisma.NotificationAttemptUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    notifications?: Prisma.NotificationAttemptUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    archivedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskScalarRelationFilter = {
    is?: Prisma.TaskWhereInput;
    isNot?: Prisma.TaskWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TaskCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.TaskUpsertWithoutAssignmentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.TaskUpdateWithoutAssignmentsInput>, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
};
export type TaskCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutNotificationsInput, Prisma.TaskUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutNotificationsInput, Prisma.TaskUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.TaskUpsertWithoutNotificationsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutNotificationsInput, Prisma.TaskUpdateWithoutNotificationsInput>, Prisma.TaskUncheckedUpdateWithoutNotificationsInput>;
};
export type TaskCreateWithoutAssignmentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationAttemptCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutAssignmentsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notifications?: Prisma.NotificationAttemptUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
};
export type TaskUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssignmentsInput, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssignmentsInput, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
};
export type TaskUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationAttemptUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationAttemptUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateWithoutNotificationsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    archivedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutNotificationsInput, Prisma.TaskUncheckedCreateWithoutNotificationsInput>;
};
export type TaskUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutNotificationsInput, Prisma.TaskUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutNotificationsInput, Prisma.TaskUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutNotificationsInput, Prisma.TaskUncheckedUpdateWithoutNotificationsInput>;
};
export type TaskUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    archivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCountOutputType = {
    assignments: number;
    notifications: number;
};
export type TaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | TaskCountOutputTypeCountAssignmentsArgs;
    notifications?: boolean | TaskCountOutputTypeCountNotificationsArgs;
};
export type TaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
};
export type TaskCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationAttemptWhereInput;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    archivedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assignments?: boolean | Prisma.Task$assignmentsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Task$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    archivedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    archivedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    archivedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "archivedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignments?: boolean | Prisma.Task$assignmentsArgs<ExtArgs>;
    notifications?: boolean | Prisma.Task$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[];
        notifications: Prisma.$NotificationAttemptPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        status: $Enums.TaskStatus;
        archivedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignments<T extends Prisma.Task$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Task$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly archivedAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where?: Prisma.TaskAssignmentWhereInput;
    orderBy?: Prisma.TaskAssignmentOrderByWithRelationInput | Prisma.TaskAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.TaskAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskAssignmentScalarFieldEnum | Prisma.TaskAssignmentScalarFieldEnum[];
};
export type Task$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    where?: Prisma.NotificationAttemptWhereInput;
    orderBy?: Prisma.NotificationAttemptOrderByWithRelationInput | Prisma.NotificationAttemptOrderByWithRelationInput[];
    cursor?: Prisma.NotificationAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationAttemptScalarFieldEnum | Prisma.NotificationAttemptScalarFieldEnum[];
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
