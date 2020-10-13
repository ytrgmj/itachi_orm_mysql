
import path from 'path'
import {FileContext} from '@dt/itachi_core'
import TMaterialSearcher from './biz/TMaterialSearcher'
import initContext from './initContext'
var context = initContext();
async function testRun(id){
    var searcher:any = context.get('TMaterialSearcher');
    console.log(await searcher.getById(id));
    
}
async function doRun(ids){
    var searcher:any = context.get('TMaterialSearcher');
    var list = await searcher.findByIds(ids);
    //console.log(list);
    
    console.log('list.length',list.length);
    
}
async function run(){
    await doRun(3051)
    await doRun(3051)
    await doRun([3051,3052,3053])
    await doRun([3051,3052,3053])
    await testRun(3054)
}
run();