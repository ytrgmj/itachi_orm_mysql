import { IExecutor } from '@dt/itachi_orm'
import mysqlPoolFac from '../../poolFac/MysqlPoolFac'
import { Sql,TransManager } from '@dt/itachi_orm'
import { Context } from '@dt/itachi_util';
import ExecutorStatus from './status/ExecutorStatus';
import NormalStatus from './status/NormalStatus';
import MysqlPoolFac from '../../poolFac/MysqlPoolFac';

export default class MySqlExecutor implements IExecutor {
    _opt: any;
    protected _context:Context;
    protected _normalStatus:NormalStatus = new NormalStatus();
   

    constructor(opt?) {
        this._opt = opt;
    }
    setOpt(opt){
        this._opt = opt;
    }

    setContext(context){
        this._context = context;
        this._normalStatus
    }
    _printLog( ... message){
        if(this._context == null){
            return;
        }
        var logger = this._context.getLogger('mysql')
        logger.debug(message);
    }

    protected _acqStatus():ExecutorStatus{
        let ret:ExecutorStatus ;
        if(this._context != null){
            let tm:TransManager = this._context.get('TransManager');
            if(tm != null && tm.getTransNum()>0){
                ret = this._context.get('MySqlTrans');
            }else{
                ret = this._normalStatus;
            }
        }else{
            ret = this._normalStatus;
        }
        return ret;
    }

    async beginTrans(){
        await this._acqStatus().beginTran();
        
    }

    async commitTrans(){
        await this._acqStatus().commitTran();
        
    }

    async rollbackTrans(){
        await this._acqStatus().rollbackTran();
        
    }



    /**
     * 执行更新
     * @param sql
     */
    async execute(sql: Sql): Promise<any> {
        var opt = this._opt;
        var str = sql.toSql();
        var values = sql.toVal();
        
        let status = this._acqStatus()
        let poolName = opt.getPoolName();
        if(poolName == null || poolName =='')
            poolName = MysqlPoolFac.getDefPoolName();
        let now = new Date();
        
        let obj;

        try{
            obj = await status.execute(poolName,<string>str,values)
        }catch(e){
            throw e;
        }finally{
            
            let num = new Date().getTime()-now.getTime();
            if(obj instanceof Array){
                this._printLog(str , values,"time:"+num,'length:'+obj.length);
            }else{
                this._printLog(str , values,"time:"+num);
            }
            
            
        }
        return obj;
    }
    /**
     * 执行查询
     * @param sql
     */
    query(sql: Sql): Promise<any> {
        return this.execute(sql);
    }

}

