import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Query } from '@dt/itachi_orm';


testDb.init();

test('testOnlyArray', async function () {

    var dao = new MySqlDao({
        tableName: 'material'
    })
    var query = new Query();
    var array = [

        { name: 'kai8', brand_id: 10002, remark: 'kai8811'},
        { name: 'kai7', brand_id: 10002 },
        { name: 'kai10', brand_id: 10001 }
    ]

    var addDataArray = [
        { name: 'kai10', remark: 'kai10111', brand_id: 10001 },
    ]
    var updateDataArray = [
        { name: 'kai7', remark: 'kai7111', brand_id: 10002 },
    ]

    var query = new Query()
    query.in('name', array.map(_obj => _obj.name))

    const res = await dao.onlyArray({
        array: array,
        query: query,
        mapFun: function (data) {
            return data.name + '_' + data.brand_id
        },
        addDataArray,
        updateDataArray,
        updateFun: function (data) {
            data.gmt_create = new Date()
            return data
        },
        sortFun: function (o1, o2) {
            return o1.id - o2.id
        },
        needUpdate: true,
        needDel: true,
        noLastFind: true
    })
})
