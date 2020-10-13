import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Query } from '@dt/itachi_orm';


testDb.init();

test('testFindCnt', async function () {

    var dao = new MySqlDao({
        tableName: 'material'
    })
    var query = new Query();
    query.eq('name', 'bbb')
        .order('id');
    console.log(await dao.findCnt(query));

})
