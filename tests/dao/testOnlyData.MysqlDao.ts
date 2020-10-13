import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Query } from '@dt/itachi_orm';


testDb.init();

test('testOnlyArray', async function () {

    var dao = new MySqlDao({
        tableName: 'material'
    })

    await dao.onlyData({
        query: { name: 'kai9', brand_id: 10001 },
        noSch: false
    })

    await dao.onlyData({
        query: { name: `kai${+new Date()}`, brand_id: 10001 },
        noSch: true,
        data: {
            remark: `kai${+new Date()}`
        }
    })

})
