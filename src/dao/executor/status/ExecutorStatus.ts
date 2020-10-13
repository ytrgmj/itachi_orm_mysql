import {Context} from '@dt/itachi_core'
import { TransManager } from '@dt/itachi_orm';

export default abstract class ExecutorStatus {

    protected _context:Context;

    
    /**
     * 执行sql
     * @param poolName 
     * @param sql 
     * @param values 
     */
    abstract async execute(poolName,sql:string,values:Array<any> );
    /**
     * 开始事物
     */
    abstract async beginTran();
    /**
     * 
     * 开始参数
     */
    abstract async commitTran();
    /**
     * 回滚参数
     */
    abstract async rollbackTran();

    setContext(context:Context){
        this._context = context;
    }

    getTransManager():TransManager{
        return this._context.get('TransManager')
    }

}