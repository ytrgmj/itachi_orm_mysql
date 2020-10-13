import ExecutorStatus from './ExecutorStatus';
export default class NormalStatus extends ExecutorStatus {
    execute(poolName: any, sql: string, values: any[]): Promise<unknown>;
    beginTran(): Promise<void>;
    commitTran(): Promise<void>;
    rollbackTran(): Promise<void>;
}
