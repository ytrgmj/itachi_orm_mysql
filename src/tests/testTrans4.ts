import initContext from './initContext'
import TMaterialDao from './biz/TMaterialDao'
import {TransManager} from '@dt/itachi_orm'
import VdMaterialDao from './biz/VdMaterialDao'

var context = initContext();
async function addMaterial(opt){
    var dao:TMaterialDao = context.get('TMaterialDao');
   
    await dao.add(opt);

}
async function addVdMaterial(opt){
    var dao:VdMaterialDao = context.get('VdMaterialDao');
   
    await dao.add(opt);

}
/**
 * 多个表
 * 没有4
 */
async function run(){
    let tm:TransManager = context.get('TransManager')
    await tm.beginTran();
    await addMaterial({name:'aaa1'})
    await addVdMaterial({name:'aaa1'})
    await tm.beginTran();
    await addMaterial({name:'aaa2'})
    await addVdMaterial({name:'aaa2'})
    await tm.commitTran();
    await tm.beginTran();
    await addMaterial({name:'aaa3'})
    await addVdMaterial({name:'aaa3'})
    await tm.beginTran();
    await addMaterial({name:'aaa4'})
    await addVdMaterial({name:'aaa4'})
    await tm.rollbackTran();
    await addMaterial({name:'aaa5'})
    await addVdMaterial({name:'aaa5'})
    await tm.commitTran();
    await tm.commitTran();
}
run();