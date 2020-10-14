import { Context } from 'itachi_core';
import { TransManager } from 'itachi_orm';
export default abstract class ExecutorStatus {
    protected _context: Context;
    /**
     * 执行sql
     * @param poolName
     * @param sql
     * @param values
     */
    abstract execute(poolName: any, sql: string, values: Array<any>): any;
    /**
     * 开始事物
     */
    abstract beginTran(): any;
    /**
     *
     * 开始参数
     */
    abstract commitTran(): any;
    /**
     * 回滚参数
     */
    abstract rollbackTran(): any;
    setContext(context: Context): void;
    getTransManager(): TransManager;
}
