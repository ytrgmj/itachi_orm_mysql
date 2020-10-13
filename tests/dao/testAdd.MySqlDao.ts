import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testAdd', async function () {
    var dao = new MySqlDao({ //换成 PgDao 就是操作Pg，EsDao就是操作Es
        tableName: 'material'
    })
    var obj = {
        name: 'aaa'
    };
    await dao.add(obj)
    console.log(obj['id']);

})
