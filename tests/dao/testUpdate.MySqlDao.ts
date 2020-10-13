import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testUpdate', async function () {
    var dao = new MySqlDao({
        tableName: 'material'
    })
    var obj = {
        id: 40000013562,
        name: 'bbb',
        is_del: 0
    };
    console.log(await dao.update(obj));
    console.log(await dao.update({
        id: 40000013562,
        name: 'ccc'
    }, { is_del: 0 }));

    console.log(await dao.update({
        id: 40000013562,
        price: 100,
        name: 'ccc'
    }, { is_del: 1 }));
})
