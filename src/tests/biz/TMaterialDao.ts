import MySqlDao from '../../dao/MySqlDao'
import { Server } from '@dt/itachi_util'
@Server()
export default class TMaterialDao extends MySqlDao{
    constructor(){
        super({
            tableName:'material',
            ids:['id']
        })
    }
    
}