import MySqlExecutor from '../../../src/dao/executor/MySqlExecutor'
import testDb from '../../testDb'
import { Sql } from '@dt/itachi_orm'

testDb.init();
test('查询', async function() {
    
    var executor = new MySqlExecutor({ getPoolName: () => '' });
    var ret = await executor.execute(new Sql('select * from shop '))
    
})