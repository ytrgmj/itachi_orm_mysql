import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';
import { Query } from '@dt/itachi_orm';
import { JoinTable } from '@dt/itachi_orm';


testDb.init();

test('testFind.join', async function () {

    var dao = new MySqlDao({
        tableName: 'shop_material_strategy'
    })/*
    var query = new Query();
    query.eq('shop_id',330108)
        .joinTable(new JoinTable('material'))
        .col('name,shop_material_strategy.id as id');
    console.log(await dao.find(query));

    var query = new Query();
    query.eq('shop_id',330108)
        .joinTable(new JoinTable('material','id','unit_id'))
        .col('name,shop_material_strategy.id as id');
    console.log(await dao.find(query));

    var query = new Query();
    query.eq('shop_id',330108)
        .joinTable(new JoinTable('material','id','unit_id'))
        .joinTable(new JoinTable('shop').setAlias('a2'))
        .col('a2.name,shop_material_strategy.id as id');
    console.log(await dao.find(query));
    */
    var query = new Query();
    query.eq('shop_id', 330108)
        .joinTable(new JoinTable('material').setAlias('a2'))
        .joinTable(new JoinTable('units', 'unit_id').setMain('a2'))
        .col([
            'a2.name',
            'units.name as unit_name']);
    console.log(await dao.find(query));
})
