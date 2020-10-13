import initContext from './initContext'
import TMaterialDao from './biz/TMaterialDao'
import {TransManager} from '@dt/itachi_orm'

var context = initContext();
async function testRun(opt){
    var dao:TMaterialDao = context.get('TMaterialDao');
   
    await dao.add(opt);

}
/*
事务套事务
没有1
*/
async function run(){
    let tm:TransManager = context.get('TransManager')
    await testRun({name:'aaa3'})
    await testRun({name:'bbb3'})
    await tm.beginTran();
    await testRun({name:'aaa0'})
    await testRun({name:'bbb0'})
    await tm.beginTran();
    await testRun({name:'aaa1'})
    await testRun({name:'bbb1'})
    await tm.rollbackTran();
    await testRun({name:'aaa2'})
    await testRun({name:'bbb2'})
    
    await tm.commitTran();
    console.log('11111111111');
    
    await testRun({name:'aaa4'})
    await testRun({name:'bbb4'})
    console.log('2222222222');
    
}
run();