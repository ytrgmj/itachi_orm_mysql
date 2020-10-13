import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Sql } from '@dt/itachi_orm'


testDb.init();

test('testUpdate', async function () {
    const dao = new MySqlDao({
        tableName: 'material'
    })
    const arr = [

        {
            id: 40000013798,
            name: 'kaiUpdate2',
            remark: 'kaiUpdate2'
        },
        {
            id: 40000013797,
            name: 'kaiUpdate1',
            remark: 'kaiUpdate1'
        }
    ]
    console.log(await dao.updateArray(
        arr,
        { price: new Sql('price=price+?', 1)}
    ))

})
