import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskAssignmentPayload>;
export type AggregateTaskAssignment = {
    _count: TaskAssignmentCountAggregateOutputType | null;
    _min: TaskAssignmentMinAggregateOutputType | null;
    _max: TaskAssignmentMaxAggregateOutputType | null;
};
export type TaskAssignmentMinAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    userId: string | null;
    completed: boolean | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskAssignmentMaxAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    userId: string | null;
    completed: boolean | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskAssignmentCountAggregateOutputType = {
    id: number;
    taskId: number;
    userId: number;
    completed: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskAssignmentMinAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    completed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskAssignmentMaxAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    completed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskAssignmentCountAggregateInputType = {
    id?: true;
    taskId?: true;
    userId?: true;
    completed?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
    orderBy?: Prisma.TaskAssignmentOrderByWithRelationInput | Prisma.TaskAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.TaskAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskAssignmentCountAggregateInputType;
    _min?: TaskAssignmentMinAggregateInputType;
    _max?: TaskAssignmentMaxAggregateInputType;
};
export type GetTaskAssignmentAggregateType<T extends TaskAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskAssignment[P]> : Prisma.GetScalarType<T[P], AggregateTaskAssignment[P]>;
};
export type TaskAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
    orderBy?: Prisma.TaskAssignmentOrderByWithAggregationInput | Prisma.TaskAssignmentOrderByWithAggregationInput[];
    by: Prisma.TaskAssignmentScalarFieldEnum[] | Prisma.TaskAssignmentScalarFieldEnum;
    having?: Prisma.TaskAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskAssignmentCountAggregateInputType | true;
    _min?: TaskAssignmentMinAggregateInputType;
    _max?: TaskAssignmentMaxAggregateInputType;
};
export type TaskAssignmentGroupByOutputType = {
    id: string;
    taskId: string;
    userId: string;
    completed: boolean;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskAssignmentCountAggregateOutputType | null;
    _min: TaskAssignmentMinAggregateOutputType | null;
    _max: TaskAssignmentMaxAggregateOutputType | null;
};
export type GetTaskAssignmentGroupByPayload<T extends TaskAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskAssignmentGroupByOutputType[P]>;
}>>;
export type TaskAssignmentWhereInput = {
    AND?: Prisma.TaskAssignmentWhereInput | Prisma.TaskAssignmentWhereInput[];
    OR?: Prisma.TaskAssignmentWhereInput[];
    NOT?: Prisma.TaskAssignmentWhereInput | Prisma.TaskAssignmentWhereInput[];
    id?: Prisma.StringFilter<"TaskAssignment"> | string;
    taskId?: Prisma.StringFilter<"TaskAssignment"> | string;
    userId?: Prisma.StringFilter<"TaskAssignment"> | string;
    completed?: Prisma.BoolFilter<"TaskAssignment"> | boolean;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TaskAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TaskAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taskId_userId?: Prisma.TaskAssignmentTaskIdUserIdCompoundUniqueInput;
    AND?: Prisma.TaskAssignmentWhereInput | Prisma.TaskAssignmentWhereInput[];
    OR?: Prisma.TaskAssignmentWhereInput[];
    NOT?: Prisma.TaskAssignmentWhereInput | Prisma.TaskAssignmentWhereInput[];
    taskId?: Prisma.StringFilter<"TaskAssignment"> | string;
    userId?: Prisma.StringFilter<"TaskAssignment"> | string;
    completed?: Prisma.BoolFilter<"TaskAssignment"> | boolean;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "taskId_userId">;
export type TaskAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskAssignmentCountOrderByAggregateInput;
    _max?: Prisma.TaskAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.TaskAssignmentMinOrderByAggregateInput;
};
export type TaskAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskAssignmentScalarWhereWithAggregatesInput | Prisma.TaskAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskAssignmentScalarWhereWithAggregatesInput | Prisma.TaskAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TaskAssignment"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"TaskAssignment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TaskAssignment"> | string;
    completed?: Prisma.BoolWithAggregatesFilter<"TaskAssignment"> | boolean;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"TaskAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TaskAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TaskAssignment"> | Date | string;
};
export type TaskAssignmentCreateInput = {
    id?: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutAssignmentsInput;
    user: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
};
export type TaskAssignmentUncheckedCreateInput = {
    id?: string;
    taskId: string;
    userId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutAssignmentsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type TaskAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentCreateManyInput = {
    id?: string;
    taskId: string;
    userId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentListRelationFilter = {
    every?: Prisma.TaskAssignmentWhereInput;
    some?: Prisma.TaskAssignmentWhereInput;
    none?: Prisma.TaskAssignmentWhereInput;
};
export type TaskAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskAssignmentTaskIdUserIdCompoundUniqueInput = {
    taskId: string;
    userId: string;
};
export type TaskAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAssignmentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput> | Prisma.TaskAssignmentCreateWithoutUserInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutUserInput | Prisma.TaskAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
};
export type TaskAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput> | Prisma.TaskAssignmentCreateWithoutUserInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutUserInput | Prisma.TaskAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
};
export type TaskAssignmentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput> | Prisma.TaskAssignmentCreateWithoutUserInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutUserInput | Prisma.TaskAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    delete?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    update?: Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.TaskAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
};
export type TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput> | Prisma.TaskAssignmentCreateWithoutUserInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutUserInput | Prisma.TaskAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    delete?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    update?: Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.TaskAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
};
export type TaskAssignmentCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput> | Prisma.TaskAssignmentCreateWithoutTaskInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput | Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskAssignmentCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
};
export type TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput> | Prisma.TaskAssignmentCreateWithoutTaskInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput | Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskAssignmentCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
};
export type TaskAssignmentUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput> | Prisma.TaskAssignmentCreateWithoutTaskInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput | Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskAssignmentCreateManyTaskInputEnvelope;
    set?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    delete?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    update?: Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskAssignmentUpdateManyWithWhereWithoutTaskInput | Prisma.TaskAssignmentUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
};
export type TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput> | Prisma.TaskAssignmentCreateWithoutTaskInput[] | Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput | Prisma.TaskAssignmentCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskAssignmentCreateManyTaskInputEnvelope;
    set?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    disconnect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    delete?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    connect?: Prisma.TaskAssignmentWhereUniqueInput | Prisma.TaskAssignmentWhereUniqueInput[];
    update?: Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskAssignmentUpdateManyWithWhereWithoutTaskInput | Prisma.TaskAssignmentUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TaskAssignmentCreateWithoutUserInput = {
    id?: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutAssignmentsInput;
};
export type TaskAssignmentUncheckedCreateWithoutUserInput = {
    id?: string;
    taskId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentCreateOrConnectWithoutUserInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput>;
};
export type TaskAssignmentCreateManyUserInputEnvelope = {
    data: Prisma.TaskAssignmentCreateManyUserInput | Prisma.TaskAssignmentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TaskAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskAssignmentUpdateWithoutUserInput, Prisma.TaskAssignmentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutUserInput, Prisma.TaskAssignmentUncheckedCreateWithoutUserInput>;
};
export type TaskAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateWithoutUserInput, Prisma.TaskAssignmentUncheckedUpdateWithoutUserInput>;
};
export type TaskAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TaskAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateManyMutationInput, Prisma.TaskAssignmentUncheckedUpdateManyWithoutUserInput>;
};
export type TaskAssignmentScalarWhereInput = {
    AND?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
    OR?: Prisma.TaskAssignmentScalarWhereInput[];
    NOT?: Prisma.TaskAssignmentScalarWhereInput | Prisma.TaskAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"TaskAssignment"> | string;
    taskId?: Prisma.StringFilter<"TaskAssignment"> | string;
    userId?: Prisma.StringFilter<"TaskAssignment"> | string;
    completed?: Prisma.BoolFilter<"TaskAssignment"> | boolean;
    completedAt?: Prisma.DateTimeNullableFilter<"TaskAssignment"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TaskAssignment"> | Date | string;
};
export type TaskAssignmentCreateWithoutTaskInput = {
    id?: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutAssignmentsInput;
};
export type TaskAssignmentUncheckedCreateWithoutTaskInput = {
    id?: string;
    userId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentCreateOrConnectWithoutTaskInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput>;
};
export type TaskAssignmentCreateManyTaskInputEnvelope = {
    data: Prisma.TaskAssignmentCreateManyTaskInput | Prisma.TaskAssignmentCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TaskAssignmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskAssignmentUpdateWithoutTaskInput, Prisma.TaskAssignmentUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TaskAssignmentCreateWithoutTaskInput, Prisma.TaskAssignmentUncheckedCreateWithoutTaskInput>;
};
export type TaskAssignmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateWithoutTaskInput, Prisma.TaskAssignmentUncheckedUpdateWithoutTaskInput>;
};
export type TaskAssignmentUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TaskAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateManyMutationInput, Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskInput>;
};
export type TaskAssignmentCreateManyUserInput = {
    id?: string;
    taskId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type TaskAssignmentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentCreateManyTaskInput = {
    id?: string;
    userId: string;
    completed?: boolean;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskAssignmentUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutAssignmentsNestedInput;
};
export type TaskAssignmentUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    completed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskAssignment"]>;
export type TaskAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    completed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskAssignment"]>;
export type TaskAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    completed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskAssignment"]>;
export type TaskAssignmentSelectScalar = {
    id?: boolean;
    taskId?: boolean;
    userId?: boolean;
    completed?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taskId" | "userId" | "completed" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["taskAssignment"]>;
export type TaskAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TaskAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskAssignment";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taskId: string;
        userId: string;
        completed: boolean;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["taskAssignment"]>;
    composites: {};
};
export type TaskAssignmentGetPayload<S extends boolean | null | undefined | TaskAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload, S>;
export type TaskAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskAssignmentCountAggregateInputType | true;
};
export interface TaskAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskAssignment'];
        meta: {
            name: 'TaskAssignment';
        };
    };
    findUnique<T extends TaskAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskAssignmentCreateArgs>(args: Prisma.SelectSubset<T, TaskAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, TaskAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, TaskAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, TaskAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskAssignmentClient<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskAssignmentCountArgs>(args?: Prisma.Subset<T, TaskAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends TaskAssignmentAggregateArgs>(args: Prisma.Subset<T, TaskAssignmentAggregateArgs>): Prisma.PrismaPromise<GetTaskAssignmentAggregateType<T>>;
    groupBy<T extends TaskAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskAssignmentFieldRefs;
}
export interface Prisma__TaskAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"TaskAssignment", 'String'>;
    readonly taskId: Prisma.FieldRef<"TaskAssignment", 'String'>;
    readonly userId: Prisma.FieldRef<"TaskAssignment", 'String'>;
    readonly completed: Prisma.FieldRef<"TaskAssignment", 'Boolean'>;
    readonly completedAt: Prisma.FieldRef<"TaskAssignment", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"TaskAssignment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TaskAssignment", 'DateTime'>;
}
export type TaskAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where: Prisma.TaskAssignmentWhereUniqueInput;
};
export type TaskAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where: Prisma.TaskAssignmentWhereUniqueInput;
};
export type TaskAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskAssignmentCreateInput, Prisma.TaskAssignmentUncheckedCreateInput>;
};
export type TaskAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskAssignmentCreateManyInput | Prisma.TaskAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    data: Prisma.TaskAssignmentCreateManyInput | Prisma.TaskAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateInput, Prisma.TaskAssignmentUncheckedUpdateInput>;
    where: Prisma.TaskAssignmentWhereUniqueInput;
};
export type TaskAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateManyMutationInput, Prisma.TaskAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.TaskAssignmentWhereInput;
    limit?: number;
};
export type TaskAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskAssignmentUpdateManyMutationInput, Prisma.TaskAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.TaskAssignmentWhereInput;
    limit?: number;
    include?: Prisma.TaskAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where: Prisma.TaskAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskAssignmentCreateInput, Prisma.TaskAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskAssignmentUpdateInput, Prisma.TaskAssignmentUncheckedUpdateInput>;
};
export type TaskAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where: Prisma.TaskAssignmentWhereUniqueInput;
};
export type TaskAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
    limit?: number;
};
export type TaskAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
};
