import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testDel', async function () {
    var dao = new MySqlDao({
        tableName: 'material'
    })
    var obj = {
        id: 40000013562

    };
    console.log(await dao.del(obj, { is_del: 1 }));
    console.log(await dao.del(obj));

})
