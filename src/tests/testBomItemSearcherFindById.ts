
import path from 'path'
import {FileContext} from '@dt/itachi_core'
import TMaterialSearcher from './biz/TMaterialSearcher'
import initContext from './initContext'
var context = initContext();
async function testRun(id){
    var searcher:any = context.get('TbomItemSearcher');
    console.log(await searcher.getById(id));
    
}
async function doRun(ids){
    var searcher:any = context.get('TbomItemSearcher');
    var list = await searcher.findByIds(ids);
    //console.log(list);
    
    console.log('list.length',list.length);
    
}
async function run(){
    
    await testRun(679)
    await  doRun([679,678])
    await doRun([679,678])
}
run();