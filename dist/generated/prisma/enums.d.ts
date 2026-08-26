export declare const TaskStatus: {
    readonly open: "open";
    readonly archived: "archived";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
