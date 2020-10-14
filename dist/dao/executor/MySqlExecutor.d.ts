import { IExecutor } from 'itachi_orm';
import { Sql } from 'itachi_orm';
import { Context } from 'itachi_util';
import ExecutorStatus from './status/ExecutorStatus';
import NormalStatus from './status/NormalStatus';
export default class MySqlExecutor implements IExecutor {
    _opt: any;
    protected _context: Context;
    protected _normalStatus: NormalStatus;
    constructor(opt?: any);
    setOpt(opt: any): void;
    setContext(context: any): void;
    _printLog(...message: any[]): void;
    protected _acqStatus(): ExecutorStatus;
    beginTrans(): Promise<void>;
    commitTrans(): Promise<void>;
    rollbackTrans(): Promise<void>;
    /**
     * 执行更新
     * @param sql
     */
    execute(sql: Sql): Promise<any>;
    /**
     * 执行查询
     * @param sql
     */
    query(sql: Sql): Promise<any>;
}
