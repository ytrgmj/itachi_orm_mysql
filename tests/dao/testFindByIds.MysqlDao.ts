import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testFindByIDs', async function () {
    var dao = new MySqlDao({
        tableName: 'material'
    })
    console.log(await dao.findByIds([10]));
    console.log(await dao.findByIds([40000013987, 40000013986, 40000013984], null, 'name'));
})
