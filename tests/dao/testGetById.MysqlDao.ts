import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testGetByID', async function () {
    var dao = new MySqlDao({
        tableName: 'material'
    })
    console.log(await dao.getById(10));

})
