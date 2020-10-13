import initContext from './initContext'
import TMaterialDao from './biz/TMaterialDao'
import {TransManager} from '@dt/itachi_orm'

var context = initContext();
async function testRun(opt){
    var dao:TMaterialDao = context.get('TMaterialDao');
   
    await dao.add(opt);

}
/**
 * 没有2
 */
async function run(){
    let tm:TransManager = context.get('TransManager')
    await testRun({name:'aaa3'})
    await testRun({name:'bbb3'})
    await tm.beginTran();
    await testRun({name:'aaa0'})
    await testRun({name:'bbb0'})
    await tm.commitTran();
    await testRun({name:'aaa1'})
    await testRun({name:'bbb1'})
    await tm.beginTran();
    await testRun({name:'aaa2'})
    await testRun({name:'bbb2'})
    await tm.rollbackTran();
    await testRun({name:'aaa4'})
    await testRun({name:'bbb4'})
    
}
run();