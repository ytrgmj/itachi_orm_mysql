import MySqlDao from '../../dao/MySqlDao'
import { Server } from '@dt/itachi_util'
@Server()
export default class VdMaterialDao extends MySqlDao{
    constructor(){
        super({
            tableName:'vd_material',
            ids:['id'],
            poolName:'vd'
        })
    }
    
}