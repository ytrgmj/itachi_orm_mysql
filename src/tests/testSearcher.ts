
import path from 'path'
import {FileContext} from '@dt/itachi_core'
import TMaterialSearcher from './biz/TMaterialSearcher'
import initContext from './initContext'


var context = initContext();

async function doRun(param){
    var searcher:TMaterialSearcher = context.get('TMaterialSearcher');
    var list = await searcher.getBrand().find(param);
    console.log('list.length',list.length);
    if(list.length==1)
        console.log(list);
        
}
async function run(){
    
    await doRun([100001,100273,-2]);
    await doRun([100001,100273]);
    await doRun(100273);
    await doRun(100273);

    console.log('==============');
    await doRun(-2);
    await doRun(-2);
    
}
run();
