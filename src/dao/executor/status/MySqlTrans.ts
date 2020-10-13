import ExecutorStatus from './ExecutorStatus'

export default class MySqlTrans extends ExecutorStatus{
    private _map:any = {};

    
    /**
     * 得到链接
     * @param poolName 
     */
    async getConnection(poolName):Promise<any>{
        let conn = this._map[poolName]
        if(conn == null){
            
            let pool = await MysqlPoolFac.get(poolName);
            conn = await this.getConnFromPool(pool);
            this._map[poolName] = conn;
        }
        return conn;
    }

    private getConnFromPool(pool){
        return new Promise(function(resolve){
            pool.getConnection(function(err, connection){
                resolve(connection);
            })
        })
    }

    async execute(poolName: any, sql: string, values: any[]) {
        var connection = await this.getConnection(poolName);
        return new Promise(function (resolve, reject) {
            connection.query(sql, values, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })

        })
    }  


    /**
     * 得到所有链接
     */
    protected async getAllConnection(){
        var keys = MysqlPoolFac.getKeys();
        var ret = [];
        for(var key of keys){
            ret.push(await this.getConnection(key))
        }
        return ret;
    }
    
    protected doWithConnection(connection,funName){
        return new Promise(function(resolve,reject){
            connection[funName](function(err){
                if(err){
                    try{
                        reject(err)
                    }catch(e){
                        reject(e);
                    }
                }else{
                    try{
                        resolve()
                    }catch(e){
                        reject(e)
                    }
                }
             })
        })
    } 

    async beginTran() {
        var connections  = await this.getAllConnection();
        for(let conn of connections){
            await this.doWithConnection(conn,'beginTransaction')
        }
    }

    async commitTran() {
        let tm = this.getTransManager();
        let num = tm.getTransNum();
        var connections  = await this.getAllConnection();
        for(let conn of connections){
            await this.doWithConnection(conn,'commit');
            if(num<=0){
                conn.release();
            }
        }
        
        if(num<=0){
            this._map = {}
        }

        
    }

    async rollbackTran() {
        var connections  = await this.getAllConnection();
        let tm = this.getTransManager();
        let num = tm.getTransNum();
        for(let conn of connections){
            
            
            await this.doWithConnection(conn,'rollback');
            if(num<=0){
                conn.release();
            }
        }
        if(num<=0)
            this._map = {}
    }

    
}

import MysqlPoolFac from '../../../poolFac/MysqlPoolFac'

