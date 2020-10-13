import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testDel', async function () {
    const dao = new MySqlDao({
        tableName: 'material'
    })
    var ids = [
        40000013851,
        {
            id: 40000013878
        },
        null
    ]
    console.log(await dao.delArray(ids, { is_del: 1 }));

})
