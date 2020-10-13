import MySqlDao from '../../dao/MySqlDao'
import { Server } from '@dt/itachi_util'
@Server()
export default class TBomItemDao extends MySqlDao{
    constructor(){
        super({
            tableName:'bom_item',
            ids:['id']
        })
    }
}