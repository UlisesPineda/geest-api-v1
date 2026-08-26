import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type NotificationAttemptModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationAttemptPayload>;
export type AggregateNotificationAttempt = {
    _count: NotificationAttemptCountAggregateOutputType | null;
    _avg: NotificationAttemptAvgAggregateOutputType | null;
    _sum: NotificationAttemptSumAggregateOutputType | null;
    _min: NotificationAttemptMinAggregateOutputType | null;
    _max: NotificationAttemptMaxAggregateOutputType | null;
};
export type NotificationAttemptAvgAggregateOutputType = {
    attempt: number | null;
    statusCode: number | null;
};
export type NotificationAttemptSumAggregateOutputType = {
    attempt: number | null;
    statusCode: number | null;
};
export type NotificationAttemptMinAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    attempt: number | null;
    statusCode: number | null;
    createdAt: Date | null;
};
export type NotificationAttemptMaxAggregateOutputType = {
    id: string | null;
    taskId: string | null;
    attempt: number | null;
    statusCode: number | null;
    createdAt: Date | null;
};
export type NotificationAttemptCountAggregateOutputType = {
    id: number;
    taskId: number;
    attempt: number;
    statusCode: number;
    createdAt: number;
    _all: number;
};
export type NotificationAttemptAvgAggregateInputType = {
    attempt?: true;
    statusCode?: true;
};
export type NotificationAttemptSumAggregateInputType = {
    attempt?: true;
    statusCode?: true;
};
export type NotificationAttemptMinAggregateInputType = {
    id?: true;
    taskId?: true;
    attempt?: true;
    statusCode?: true;
    createdAt?: true;
};
export type NotificationAttemptMaxAggregateInputType = {
    id?: true;
    taskId?: true;
    attempt?: true;
    statusCode?: true;
    createdAt?: true;
};
export type NotificationAttemptCountAggregateInputType = {
    id?: true;
    taskId?: true;
    attempt?: true;
    statusCode?: true;
    createdAt?: true;
    _all?: true;
};
export type NotificationAttemptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationAttemptWhereInput;
    orderBy?: Prisma.NotificationAttemptOrderByWithRelationInput | Prisma.NotificationAttemptOrderByWithRelationInput[];
    cursor?: Prisma.NotificationAttemptWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationAttemptCountAggregateInputType;
    _avg?: NotificationAttemptAvgAggregateInputType;
    _sum?: NotificationAttemptSumAggregateInputType;
    _min?: NotificationAttemptMinAggregateInputType;
    _max?: NotificationAttemptMaxAggregateInputType;
};
export type GetNotificationAttemptAggregateType<T extends NotificationAttemptAggregateArgs> = {
    [P in keyof T & keyof AggregateNotificationAttempt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotificationAttempt[P]> : Prisma.GetScalarType<T[P], AggregateNotificationAttempt[P]>;
};
export type NotificationAttemptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationAttemptWhereInput;
    orderBy?: Prisma.NotificationAttemptOrderByWithAggregationInput | Prisma.NotificationAttemptOrderByWithAggregationInput[];
    by: Prisma.NotificationAttemptScalarFieldEnum[] | Prisma.NotificationAttemptScalarFieldEnum;
    having?: Prisma.NotificationAttemptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationAttemptCountAggregateInputType | true;
    _avg?: NotificationAttemptAvgAggregateInputType;
    _sum?: NotificationAttemptSumAggregateInputType;
    _min?: NotificationAttemptMinAggregateInputType;
    _max?: NotificationAttemptMaxAggregateInputType;
};
export type NotificationAttemptGroupByOutputType = {
    id: string;
    taskId: string;
    attempt: number;
    statusCode: number | null;
    createdAt: Date;
    _count: NotificationAttemptCountAggregateOutputType | null;
    _avg: NotificationAttemptAvgAggregateOutputType | null;
    _sum: NotificationAttemptSumAggregateOutputType | null;
    _min: NotificationAttemptMinAggregateOutputType | null;
    _max: NotificationAttemptMaxAggregateOutputType | null;
};
export type GetNotificationAttemptGroupByPayload<T extends NotificationAttemptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationAttemptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationAttemptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationAttemptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationAttemptGroupByOutputType[P]>;
}>>;
export type NotificationAttemptWhereInput = {
    AND?: Prisma.NotificationAttemptWhereInput | Prisma.NotificationAttemptWhereInput[];
    OR?: Prisma.NotificationAttemptWhereInput[];
    NOT?: Prisma.NotificationAttemptWhereInput | Prisma.NotificationAttemptWhereInput[];
    id?: Prisma.StringFilter<"NotificationAttempt"> | string;
    taskId?: Prisma.StringFilter<"NotificationAttempt"> | string;
    attempt?: Prisma.IntFilter<"NotificationAttempt"> | number;
    statusCode?: Prisma.IntNullableFilter<"NotificationAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationAttempt"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
};
export type NotificationAttemptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
};
export type NotificationAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    taskId_attempt?: Prisma.NotificationAttemptTaskIdAttemptCompoundUniqueInput;
    AND?: Prisma.NotificationAttemptWhereInput | Prisma.NotificationAttemptWhereInput[];
    OR?: Prisma.NotificationAttemptWhereInput[];
    NOT?: Prisma.NotificationAttemptWhereInput | Prisma.NotificationAttemptWhereInput[];
    taskId?: Prisma.StringFilter<"NotificationAttempt"> | string;
    attempt?: Prisma.IntFilter<"NotificationAttempt"> | number;
    statusCode?: Prisma.IntNullableFilter<"NotificationAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationAttempt"> | Date | string;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
}, "id" | "taskId_attempt">;
export type NotificationAttemptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NotificationAttemptCountOrderByAggregateInput;
    _avg?: Prisma.NotificationAttemptAvgOrderByAggregateInput;
    _max?: Prisma.NotificationAttemptMaxOrderByAggregateInput;
    _min?: Prisma.NotificationAttemptMinOrderByAggregateInput;
    _sum?: Prisma.NotificationAttemptSumOrderByAggregateInput;
};
export type NotificationAttemptScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationAttemptScalarWhereWithAggregatesInput | Prisma.NotificationAttemptScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationAttemptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationAttemptScalarWhereWithAggregatesInput | Prisma.NotificationAttemptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"NotificationAttempt"> | string;
    taskId?: Prisma.StringWithAggregatesFilter<"NotificationAttempt"> | string;
    attempt?: Prisma.IntWithAggregatesFilter<"NotificationAttempt"> | number;
    statusCode?: Prisma.IntNullableWithAggregatesFilter<"NotificationAttempt"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"NotificationAttempt"> | Date | string;
};
export type NotificationAttemptCreateInput = {
    id?: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
    task: Prisma.TaskCreateNestedOneWithoutNotificationsInput;
};
export type NotificationAttemptUncheckedCreateInput = {
    id?: string;
    taskId: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
};
export type NotificationAttemptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    task?: Prisma.TaskUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type NotificationAttemptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptCreateManyInput = {
    id?: string;
    taskId: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
};
export type NotificationAttemptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    taskId?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptListRelationFilter = {
    every?: Prisma.NotificationAttemptWhereInput;
    some?: Prisma.NotificationAttemptWhereInput;
    none?: Prisma.NotificationAttemptWhereInput;
};
export type NotificationAttemptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationAttemptTaskIdAttemptCompoundUniqueInput = {
    taskId: string;
    attempt: number;
};
export type NotificationAttemptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationAttemptAvgOrderByAggregateInput = {
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
};
export type NotificationAttemptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationAttemptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    taskId?: Prisma.SortOrder;
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NotificationAttemptSumOrderByAggregateInput = {
    attempt?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
};
export type NotificationAttemptCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput> | Prisma.NotificationAttemptCreateWithoutTaskInput[] | Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput | Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.NotificationAttemptCreateManyTaskInputEnvelope;
    connect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
};
export type NotificationAttemptUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput> | Prisma.NotificationAttemptCreateWithoutTaskInput[] | Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput | Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.NotificationAttemptCreateManyTaskInputEnvelope;
    connect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
};
export type NotificationAttemptUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput> | Prisma.NotificationAttemptCreateWithoutTaskInput[] | Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput | Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.NotificationAttemptUpsertWithWhereUniqueWithoutTaskInput | Prisma.NotificationAttemptUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.NotificationAttemptCreateManyTaskInputEnvelope;
    set?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    disconnect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    delete?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    connect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    update?: Prisma.NotificationAttemptUpdateWithWhereUniqueWithoutTaskInput | Prisma.NotificationAttemptUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.NotificationAttemptUpdateManyWithWhereWithoutTaskInput | Prisma.NotificationAttemptUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.NotificationAttemptScalarWhereInput | Prisma.NotificationAttemptScalarWhereInput[];
};
export type NotificationAttemptUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput> | Prisma.NotificationAttemptCreateWithoutTaskInput[] | Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput | Prisma.NotificationAttemptCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.NotificationAttemptUpsertWithWhereUniqueWithoutTaskInput | Prisma.NotificationAttemptUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.NotificationAttemptCreateManyTaskInputEnvelope;
    set?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    disconnect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    delete?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    connect?: Prisma.NotificationAttemptWhereUniqueInput | Prisma.NotificationAttemptWhereUniqueInput[];
    update?: Prisma.NotificationAttemptUpdateWithWhereUniqueWithoutTaskInput | Prisma.NotificationAttemptUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.NotificationAttemptUpdateManyWithWhereWithoutTaskInput | Prisma.NotificationAttemptUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.NotificationAttemptScalarWhereInput | Prisma.NotificationAttemptScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NotificationAttemptCreateWithoutTaskInput = {
    id?: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
};
export type NotificationAttemptUncheckedCreateWithoutTaskInput = {
    id?: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
};
export type NotificationAttemptCreateOrConnectWithoutTaskInput = {
    where: Prisma.NotificationAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput>;
};
export type NotificationAttemptCreateManyTaskInputEnvelope = {
    data: Prisma.NotificationAttemptCreateManyTaskInput | Prisma.NotificationAttemptCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type NotificationAttemptUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.NotificationAttemptWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationAttemptUpdateWithoutTaskInput, Prisma.NotificationAttemptUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.NotificationAttemptCreateWithoutTaskInput, Prisma.NotificationAttemptUncheckedCreateWithoutTaskInput>;
};
export type NotificationAttemptUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.NotificationAttemptWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationAttemptUpdateWithoutTaskInput, Prisma.NotificationAttemptUncheckedUpdateWithoutTaskInput>;
};
export type NotificationAttemptUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.NotificationAttemptScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationAttemptUpdateManyMutationInput, Prisma.NotificationAttemptUncheckedUpdateManyWithoutTaskInput>;
};
export type NotificationAttemptScalarWhereInput = {
    AND?: Prisma.NotificationAttemptScalarWhereInput | Prisma.NotificationAttemptScalarWhereInput[];
    OR?: Prisma.NotificationAttemptScalarWhereInput[];
    NOT?: Prisma.NotificationAttemptScalarWhereInput | Prisma.NotificationAttemptScalarWhereInput[];
    id?: Prisma.StringFilter<"NotificationAttempt"> | string;
    taskId?: Prisma.StringFilter<"NotificationAttempt"> | string;
    attempt?: Prisma.IntFilter<"NotificationAttempt"> | number;
    statusCode?: Prisma.IntNullableFilter<"NotificationAttempt"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"NotificationAttempt"> | Date | string;
};
export type NotificationAttemptCreateManyTaskInput = {
    id?: string;
    attempt: number;
    statusCode?: number | null;
    createdAt?: Date | string;
};
export type NotificationAttemptUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptUncheckedUpdateWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptUncheckedUpdateManyWithoutTaskInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    attempt?: Prisma.IntFieldUpdateOperationsInput | number;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationAttemptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    attempt?: boolean;
    statusCode?: boolean;
    createdAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationAttempt"]>;
export type NotificationAttemptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    attempt?: boolean;
    statusCode?: boolean;
    createdAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationAttempt"]>;
export type NotificationAttemptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    taskId?: boolean;
    attempt?: boolean;
    statusCode?: boolean;
    createdAt?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notificationAttempt"]>;
export type NotificationAttemptSelectScalar = {
    id?: boolean;
    taskId?: boolean;
    attempt?: boolean;
    statusCode?: boolean;
    createdAt?: boolean;
};
export type NotificationAttemptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "taskId" | "attempt" | "statusCode" | "createdAt", ExtArgs["result"]["notificationAttempt"]>;
export type NotificationAttemptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type NotificationAttemptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type NotificationAttemptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
};
export type $NotificationAttemptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotificationAttempt";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        taskId: string;
        attempt: number;
        statusCode: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["notificationAttempt"]>;
    composites: {};
};
export type NotificationAttemptGetPayload<S extends boolean | null | undefined | NotificationAttemptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload, S>;
export type NotificationAttemptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationAttemptCountAggregateInputType | true;
};
export interface NotificationAttemptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotificationAttempt'];
        meta: {
            name: 'NotificationAttempt';
        };
    };
    findUnique<T extends NotificationAttemptFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationAttemptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotificationAttemptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotificationAttemptFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotificationAttemptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotificationAttemptFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotificationAttemptCreateArgs>(args: Prisma.SelectSubset<T, NotificationAttemptCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotificationAttemptCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotificationAttemptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotificationAttemptDeleteArgs>(args: Prisma.SelectSubset<T, NotificationAttemptDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotificationAttemptUpdateArgs>(args: Prisma.SelectSubset<T, NotificationAttemptUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotificationAttemptDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotificationAttemptUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotificationAttemptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotificationAttemptUpsertArgs>(args: Prisma.SelectSubset<T, NotificationAttemptUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationAttemptClient<runtime.Types.Result.GetResult<Prisma.$NotificationAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotificationAttemptCountArgs>(args?: Prisma.Subset<T, NotificationAttemptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationAttemptCountAggregateOutputType> : number>;
    aggregate<T extends NotificationAttemptAggregateArgs>(args: Prisma.Subset<T, NotificationAttemptAggregateArgs>): Prisma.PrismaPromise<GetNotificationAttemptAggregateType<T>>;
    groupBy<T extends NotificationAttemptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationAttemptGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationAttemptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotificationAttemptFieldRefs;
}
export interface Prisma__NotificationAttemptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotificationAttemptFieldRefs {
    readonly id: Prisma.FieldRef<"NotificationAttempt", 'String'>;
    readonly taskId: Prisma.FieldRef<"NotificationAttempt", 'String'>;
    readonly attempt: Prisma.FieldRef<"NotificationAttempt", 'Int'>;
    readonly statusCode: Prisma.FieldRef<"NotificationAttempt", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"NotificationAttempt", 'DateTime'>;
}
export type NotificationAttemptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    where: Prisma.NotificationAttemptWhereUniqueInput;
};
export type NotificationAttemptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    where: Prisma.NotificationAttemptWhereUniqueInput;
};
export type NotificationAttemptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationAttemptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationAttemptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotificationAttemptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationAttemptCreateInput, Prisma.NotificationAttemptUncheckedCreateInput>;
};
export type NotificationAttemptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotificationAttemptCreateManyInput | Prisma.NotificationAttemptCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotificationAttemptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    data: Prisma.NotificationAttemptCreateManyInput | Prisma.NotificationAttemptCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotificationAttemptIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotificationAttemptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationAttemptUpdateInput, Prisma.NotificationAttemptUncheckedUpdateInput>;
    where: Prisma.NotificationAttemptWhereUniqueInput;
};
export type NotificationAttemptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotificationAttemptUpdateManyMutationInput, Prisma.NotificationAttemptUncheckedUpdateManyInput>;
    where?: Prisma.NotificationAttemptWhereInput;
    limit?: number;
};
export type NotificationAttemptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotificationAttemptUpdateManyMutationInput, Prisma.NotificationAttemptUncheckedUpdateManyInput>;
    where?: Prisma.NotificationAttemptWhereInput;
    limit?: number;
    include?: Prisma.NotificationAttemptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotificationAttemptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    where: Prisma.NotificationAttemptWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationAttemptCreateInput, Prisma.NotificationAttemptUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotificationAttemptUpdateInput, Prisma.NotificationAttemptUncheckedUpdateInput>;
};
export type NotificationAttemptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
    where: Prisma.NotificationAttemptWhereUniqueInput;
};
export type NotificationAttemptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationAttemptWhereInput;
    limit?: number;
};
export type NotificationAttemptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationAttemptSelect<ExtArgs> | null;
    omit?: Prisma.NotificationAttemptOmit<ExtArgs> | null;
    include?: Prisma.NotificationAttemptInclude<ExtArgs> | null;
};
