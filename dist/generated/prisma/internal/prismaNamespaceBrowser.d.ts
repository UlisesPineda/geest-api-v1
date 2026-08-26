import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Task: "Task";
    readonly TaskAssignment: "TaskAssignment";
    readonly NotificationAttempt: "NotificationAttempt";
    readonly IdempotencyRecord: "IdempotencyRecord";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly archivedAt: "archivedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const TaskAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly taskId: "taskId";
    readonly userId: "userId";
    readonly completed: "completed";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskAssignmentScalarFieldEnum = (typeof TaskAssignmentScalarFieldEnum)[keyof typeof TaskAssignmentScalarFieldEnum];
export declare const NotificationAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly taskId: "taskId";
    readonly attempt: "attempt";
    readonly statusCode: "statusCode";
    readonly createdAt: "createdAt";
};
export type NotificationAttemptScalarFieldEnum = (typeof NotificationAttemptScalarFieldEnum)[keyof typeof NotificationAttemptScalarFieldEnum];
export declare const IdempotencyRecordScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly endpoint: "endpoint";
    readonly requestHash: "requestHash";
    readonly statusCode: "statusCode";
    readonly responseBody: "responseBody";
    readonly completed: "completed";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IdempotencyRecordScalarFieldEnum = (typeof IdempotencyRecordScalarFieldEnum)[keyof typeof IdempotencyRecordScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
