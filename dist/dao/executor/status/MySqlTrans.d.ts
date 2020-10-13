import ExecutorStatus from './ExecutorStatus';
export default class MySqlTrans extends ExecutorStatus {
    private _map;
    /**
     * 得到链接
     * @param poolName
     */
    getConnection(poolName: any): Promise<any>;
    private getConnFromPool;
    execute(poolName: any, sql: string, values: any[]): Promise<unknown>;
    /**
     * 得到所有链接
     */
    protected getAllConnection(): Promise<any[]>;
    protected doWithConnection(connection: any, funName: any): Promise<unknown>;
    beginTran(): Promise<void>;
    commitTran(): Promise<void>;
    rollbackTran(): Promise<void>;
}
