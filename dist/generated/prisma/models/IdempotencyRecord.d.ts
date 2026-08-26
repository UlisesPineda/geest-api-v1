import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type IdempotencyRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$IdempotencyRecordPayload>;
export type AggregateIdempotencyRecord = {
    _count: IdempotencyRecordCountAggregateOutputType | null;
    _avg: IdempotencyRecordAvgAggregateOutputType | null;
    _sum: IdempotencyRecordSumAggregateOutputType | null;
    _min: IdempotencyRecordMinAggregateOutputType | null;
    _max: IdempotencyRecordMaxAggregateOutputType | null;
};
export type IdempotencyRecordAvgAggregateOutputType = {
    statusCode: number | null;
};
export type IdempotencyRecordSumAggregateOutputType = {
    statusCode: number | null;
};
export type IdempotencyRecordMinAggregateOutputType = {
    id: string | null;
    key: string | null;
    endpoint: string | null;
    requestHash: string | null;
    statusCode: number | null;
    completed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IdempotencyRecordMaxAggregateOutputType = {
    id: string | null;
    key: string | null;
    endpoint: string | null;
    requestHash: string | null;
    statusCode: number | null;
    completed: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IdempotencyRecordCountAggregateOutputType = {
    id: number;
    key: number;
    endpoint: number;
    requestHash: number;
    statusCode: number;
    responseBody: number;
    completed: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IdempotencyRecordAvgAggregateInputType = {
    statusCode?: true;
};
export type IdempotencyRecordSumAggregateInputType = {
    statusCode?: true;
};
export type IdempotencyRecordMinAggregateInputType = {
    id?: true;
    key?: true;
    endpoint?: true;
    requestHash?: true;
    statusCode?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IdempotencyRecordMaxAggregateInputType = {
    id?: true;
    key?: true;
    endpoint?: true;
    requestHash?: true;
    statusCode?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IdempotencyRecordCountAggregateInputType = {
    id?: true;
    key?: true;
    endpoint?: true;
    requestHash?: true;
    statusCode?: true;
    responseBody?: true;
    completed?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IdempotencyRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyRecordWhereInput;
    orderBy?: Prisma.IdempotencyRecordOrderByWithRelationInput | Prisma.IdempotencyRecordOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IdempotencyRecordCountAggregateInputType;
    _avg?: IdempotencyRecordAvgAggregateInputType;
    _sum?: IdempotencyRecordSumAggregateInputType;
    _min?: IdempotencyRecordMinAggregateInputType;
    _max?: IdempotencyRecordMaxAggregateInputType;
};
export type GetIdempotencyRecordAggregateType<T extends IdempotencyRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateIdempotencyRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIdempotencyRecord[P]> : Prisma.GetScalarType<T[P], AggregateIdempotencyRecord[P]>;
};
export type IdempotencyRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyRecordWhereInput;
    orderBy?: Prisma.IdempotencyRecordOrderByWithAggregationInput | Prisma.IdempotencyRecordOrderByWithAggregationInput[];
    by: Prisma.IdempotencyRecordScalarFieldEnum[] | Prisma.IdempotencyRecordScalarFieldEnum;
    having?: Prisma.IdempotencyRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IdempotencyRecordCountAggregateInputType | true;
    _avg?: IdempotencyRecordAvgAggregateInputType;
    _sum?: IdempotencyRecordSumAggregateInputType;
    _min?: IdempotencyRecordMinAggregateInputType;
    _max?: IdempotencyRecordMaxAggregateInputType;
};
export type IdempotencyRecordGroupByOutputType = {
    id: string;
    key: string;
    endpoint: string;
    requestHash: string;
    statusCode: number | null;
    responseBody: runtime.JsonValue | null;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: IdempotencyRecordCountAggregateOutputType | null;
    _avg: IdempotencyRecordAvgAggregateOutputType | null;
    _sum: IdempotencyRecordSumAggregateOutputType | null;
    _min: IdempotencyRecordMinAggregateOutputType | null;
    _max: IdempotencyRecordMaxAggregateOutputType | null;
};
export type GetIdempotencyRecordGroupByPayload<T extends IdempotencyRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IdempotencyRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IdempotencyRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IdempotencyRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IdempotencyRecordGroupByOutputType[P]>;
}>>;
export type IdempotencyRecordWhereInput = {
    AND?: Prisma.IdempotencyRecordWhereInput | Prisma.IdempotencyRecordWhereInput[];
    OR?: Prisma.IdempotencyRecordWhereInput[];
    NOT?: Prisma.IdempotencyRecordWhereInput | Prisma.IdempotencyRecordWhereInput[];
    id?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    key?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    endpoint?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    requestHash?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    statusCode?: Prisma.IntNullableFilter<"IdempotencyRecord"> | number | null;
    responseBody?: Prisma.JsonNullableFilter<"IdempotencyRecord">;
    completed?: Prisma.BoolFilter<"IdempotencyRecord"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"IdempotencyRecord"> | Date | string;
};
export type IdempotencyRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    endpoint?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IdempotencyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    key_endpoint?: Prisma.IdempotencyRecordKeyEndpointCompoundUniqueInput;
    AND?: Prisma.IdempotencyRecordWhereInput | Prisma.IdempotencyRecordWhereInput[];
    OR?: Prisma.IdempotencyRecordWhereInput[];
    NOT?: Prisma.IdempotencyRecordWhereInput | Prisma.IdempotencyRecordWhereInput[];
    key?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    endpoint?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    requestHash?: Prisma.StringFilter<"IdempotencyRecord"> | string;
    statusCode?: Prisma.IntNullableFilter<"IdempotencyRecord"> | number | null;
    responseBody?: Prisma.JsonNullableFilter<"IdempotencyRecord">;
    completed?: Prisma.BoolFilter<"IdempotencyRecord"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"IdempotencyRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"IdempotencyRecord"> | Date | string;
}, "id" | "key_endpoint">;
export type IdempotencyRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    endpoint?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    responseBody?: Prisma.SortOrderInput | Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IdempotencyRecordCountOrderByAggregateInput;
    _avg?: Prisma.IdempotencyRecordAvgOrderByAggregateInput;
    _max?: Prisma.IdempotencyRecordMaxOrderByAggregateInput;
    _min?: Prisma.IdempotencyRecordMinOrderByAggregateInput;
    _sum?: Prisma.IdempotencyRecordSumOrderByAggregateInput;
};
export type IdempotencyRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.IdempotencyRecordScalarWhereWithAggregatesInput | Prisma.IdempotencyRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.IdempotencyRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IdempotencyRecordScalarWhereWithAggregatesInput | Prisma.IdempotencyRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"IdempotencyRecord"> | string;
    key?: Prisma.StringWithAggregatesFilter<"IdempotencyRecord"> | string;
    endpoint?: Prisma.StringWithAggregatesFilter<"IdempotencyRecord"> | string;
    requestHash?: Prisma.StringWithAggregatesFilter<"IdempotencyRecord"> | string;
    statusCode?: Prisma.IntNullableWithAggregatesFilter<"IdempotencyRecord"> | number | null;
    responseBody?: Prisma.JsonNullableWithAggregatesFilter<"IdempotencyRecord">;
    completed?: Prisma.BoolWithAggregatesFilter<"IdempotencyRecord"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IdempotencyRecord"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"IdempotencyRecord"> | Date | string;
};
export type IdempotencyRecordCreateInput = {
    id?: string;
    key: string;
    endpoint: string;
    requestHash: string;
    statusCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IdempotencyRecordUncheckedCreateInput = {
    id?: string;
    key: string;
    endpoint: string;
    requestHash: string;
    statusCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IdempotencyRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    endpoint?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    endpoint?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyRecordCreateManyInput = {
    id?: string;
    key: string;
    endpoint: string;
    requestHash: string;
    statusCode?: number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type IdempotencyRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    endpoint?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    endpoint?: Prisma.StringFieldUpdateOperationsInput | string;
    requestHash?: Prisma.StringFieldUpdateOperationsInput | string;
    statusCode?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    responseBody?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    completed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IdempotencyRecordKeyEndpointCompoundUniqueInput = {
    key: string;
    endpoint: string;
};
export type IdempotencyRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    endpoint?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    responseBody?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IdempotencyRecordAvgOrderByAggregateInput = {
    statusCode?: Prisma.SortOrder;
};
export type IdempotencyRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    endpoint?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IdempotencyRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    endpoint?: Prisma.SortOrder;
    requestHash?: Prisma.SortOrder;
    statusCode?: Prisma.SortOrder;
    completed?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IdempotencyRecordSumOrderByAggregateInput = {
    statusCode?: Prisma.SortOrder;
};
export type IdempotencyRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    endpoint?: boolean;
    requestHash?: boolean;
    statusCode?: boolean;
    responseBody?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["idempotencyRecord"]>;
export type IdempotencyRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    endpoint?: boolean;
    requestHash?: boolean;
    statusCode?: boolean;
    responseBody?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["idempotencyRecord"]>;
export type IdempotencyRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    endpoint?: boolean;
    requestHash?: boolean;
    statusCode?: boolean;
    responseBody?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["idempotencyRecord"]>;
export type IdempotencyRecordSelectScalar = {
    id?: boolean;
    key?: boolean;
    endpoint?: boolean;
    requestHash?: boolean;
    statusCode?: boolean;
    responseBody?: boolean;
    completed?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type IdempotencyRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "endpoint" | "requestHash" | "statusCode" | "responseBody" | "completed" | "createdAt" | "updatedAt", ExtArgs["result"]["idempotencyRecord"]>;
export type $IdempotencyRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IdempotencyRecord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        key: string;
        endpoint: string;
        requestHash: string;
        statusCode: number | null;
        responseBody: runtime.JsonValue | null;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["idempotencyRecord"]>;
    composites: {};
};
export type IdempotencyRecordGetPayload<S extends boolean | null | undefined | IdempotencyRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload, S>;
export type IdempotencyRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IdempotencyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IdempotencyRecordCountAggregateInputType | true;
};
export interface IdempotencyRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyRecord'];
        meta: {
            name: 'IdempotencyRecord';
        };
    };
    findUnique<T extends IdempotencyRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IdempotencyRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IdempotencyRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IdempotencyRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IdempotencyRecordFindManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IdempotencyRecordCreateArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordCreateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IdempotencyRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IdempotencyRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IdempotencyRecordDeleteArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IdempotencyRecordUpdateArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IdempotencyRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, IdempotencyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IdempotencyRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IdempotencyRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IdempotencyRecordUpsertArgs>(args: Prisma.SelectSubset<T, IdempotencyRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__IdempotencyRecordClient<runtime.Types.Result.GetResult<Prisma.$IdempotencyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IdempotencyRecordCountArgs>(args?: Prisma.Subset<T, IdempotencyRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IdempotencyRecordCountAggregateOutputType> : number>;
    aggregate<T extends IdempotencyRecordAggregateArgs>(args: Prisma.Subset<T, IdempotencyRecordAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyRecordAggregateType<T>>;
    groupBy<T extends IdempotencyRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IdempotencyRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: IdempotencyRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IdempotencyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IdempotencyRecordFieldRefs;
}
export interface Prisma__IdempotencyRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IdempotencyRecordFieldRefs {
    readonly id: Prisma.FieldRef<"IdempotencyRecord", 'String'>;
    readonly key: Prisma.FieldRef<"IdempotencyRecord", 'String'>;
    readonly endpoint: Prisma.FieldRef<"IdempotencyRecord", 'String'>;
    readonly requestHash: Prisma.FieldRef<"IdempotencyRecord", 'String'>;
    readonly statusCode: Prisma.FieldRef<"IdempotencyRecord", 'Int'>;
    readonly responseBody: Prisma.FieldRef<"IdempotencyRecord", 'Json'>;
    readonly completed: Prisma.FieldRef<"IdempotencyRecord", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"IdempotencyRecord", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"IdempotencyRecord", 'DateTime'>;
}
export type IdempotencyRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where: Prisma.IdempotencyRecordWhereUniqueInput;
};
export type IdempotencyRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where: Prisma.IdempotencyRecordWhereUniqueInput;
};
export type IdempotencyRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where?: Prisma.IdempotencyRecordWhereInput;
    orderBy?: Prisma.IdempotencyRecordOrderByWithRelationInput | Prisma.IdempotencyRecordOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdempotencyRecordScalarFieldEnum | Prisma.IdempotencyRecordScalarFieldEnum[];
};
export type IdempotencyRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where?: Prisma.IdempotencyRecordWhereInput;
    orderBy?: Prisma.IdempotencyRecordOrderByWithRelationInput | Prisma.IdempotencyRecordOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdempotencyRecordScalarFieldEnum | Prisma.IdempotencyRecordScalarFieldEnum[];
};
export type IdempotencyRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where?: Prisma.IdempotencyRecordWhereInput;
    orderBy?: Prisma.IdempotencyRecordOrderByWithRelationInput | Prisma.IdempotencyRecordOrderByWithRelationInput[];
    cursor?: Prisma.IdempotencyRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IdempotencyRecordScalarFieldEnum | Prisma.IdempotencyRecordScalarFieldEnum[];
};
export type IdempotencyRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyRecordCreateInput, Prisma.IdempotencyRecordUncheckedCreateInput>;
};
export type IdempotencyRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IdempotencyRecordCreateManyInput | Prisma.IdempotencyRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    data: Prisma.IdempotencyRecordCreateManyInput | Prisma.IdempotencyRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IdempotencyRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyRecordUpdateInput, Prisma.IdempotencyRecordUncheckedUpdateInput>;
    where: Prisma.IdempotencyRecordWhereUniqueInput;
};
export type IdempotencyRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IdempotencyRecordUpdateManyMutationInput, Prisma.IdempotencyRecordUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyRecordWhereInput;
    limit?: number;
};
export type IdempotencyRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IdempotencyRecordUpdateManyMutationInput, Prisma.IdempotencyRecordUncheckedUpdateManyInput>;
    where?: Prisma.IdempotencyRecordWhereInput;
    limit?: number;
};
export type IdempotencyRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where: Prisma.IdempotencyRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.IdempotencyRecordCreateInput, Prisma.IdempotencyRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IdempotencyRecordUpdateInput, Prisma.IdempotencyRecordUncheckedUpdateInput>;
};
export type IdempotencyRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
    where: Prisma.IdempotencyRecordWhereUniqueInput;
};
export type IdempotencyRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IdempotencyRecordWhereInput;
    limit?: number;
};
export type IdempotencyRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IdempotencyRecordSelect<ExtArgs> | null;
    omit?: Prisma.IdempotencyRecordOmit<ExtArgs> | null;
};
