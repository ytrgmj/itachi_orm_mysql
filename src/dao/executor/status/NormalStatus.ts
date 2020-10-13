import ExecutorStatus from './ExecutorStatus'

export default class NormalStatus extends ExecutorStatus{
    async execute(poolName: any, sql: string, values: any[]) {
        
        var pool = MysqlPoolFac.get(poolName);
        return new Promise(function (resolve, reject) {
            pool.query(sql, values, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })

        })
    }    
    async beginTran() {
        throw new Error("Method not implemented.");
    }
    async commitTran() {
        throw new Error("Method not implemented.");
    }
    async rollbackTran() {
        throw new Error("Method not implemented.");
    }

    
}

import MysqlPoolFac from '../../../poolFac/MysqlPoolFac'
