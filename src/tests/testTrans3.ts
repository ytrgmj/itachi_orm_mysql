import initContext from './initContext'
import TMaterialDao from './biz/TMaterialDao'
import {TransManager} from '@dt/itachi_orm'
import TBomItemDao from './biz/TBomItemDao';

var context = initContext();
async function addMaterial(opt){
    var dao:TMaterialDao = context.get('TMaterialDao');
   
    await dao.add(opt);

}
async function addBomItem(opt){
    var dao:TBomItemDao = context.get('TBomItemDao');
   
    await dao.add(opt);

}
/**
 * 多个表
 * 没有4
 */
async function run(){
    let tm:TransManager = context.get('TransManager')
    await addMaterial({name:'aaa1'})
    await addBomItem({material_id:'1'})
    await tm.beginTran();
    await addMaterial({name:'aaa2'})
    await addBomItem({material_id:'2'})
    await tm.commitTran();
    await addMaterial({name:'aaa3'})
    await addBomItem({material_id:'3'})
    await tm.beginTran();
    await addMaterial({name:'aaa4'})
    await addBomItem({material_id:'4'})
    await tm.rollbackTran();
    await addMaterial({name:'aaa5'})
    await addBomItem({material_id:'5'})
    
}
run();