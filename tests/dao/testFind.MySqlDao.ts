import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';




import { Query,OrCdt,AndCdt } from '@dt/itachi_orm';  

testDb.init();

test('testFind', async function () {

    var dao = new MySqlDao({
        tableName: 'material'
    })
    var query = new Query();
    query.eq('name','bbb')
        .eq('unit_id',2)
        .bigEq('unit_id',2)
        .less('unit_id',10)
        .lessEq('unit_id',11)
        .like('name','%bb%')
        .isNull('id')
        .setPage(1,10)
        .order('id','desc');
    var orCdt = new OrCdt();
    orCdt.eq('id',1)
        .eq('id',2)
    var andCdt = new AndCdt();
    andCdt.eq('id',3)
        .eq('id',4);
    query.addCdt(orCdt)
        .addCdt(andCdt);

    console.log(await dao.find(query));

})
