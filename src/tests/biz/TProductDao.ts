import {Server} from '@dt/itachi_core'
import MySqlDao from '../../dao/MySqlDao'
import { SortCol } from '@dt/itachi_orm'
@Server()
@SortCol()

export default class ProductDao extends MySqlDao{
    constructor(){
        super({
            tableName:'product',
            poolName:'cloud',
            ids:['product_id']
        })
    }
}