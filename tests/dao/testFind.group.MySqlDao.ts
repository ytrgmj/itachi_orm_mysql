import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Query } from '@dt/itachi_orm';


testDb.init();

test('testFind.group', async function () {

    var dao = new MySqlDao({
        tableName: 'material'
    })
    var query = new Query();
    query.eq('name', 'bbb')
        .group('unit_id')
        .col('unit_id,count(*) as cnt,sum(id) as sum_id')
    console.log(await dao.find(query));

})
