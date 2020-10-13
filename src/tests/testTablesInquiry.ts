import TMaterialSearcher from './biz/TMaterialSearcher'
import initContext from './initContext'
var context= initContext();
async function doRun(params){
    var searcher = context.get<TMaterialSearcher>('TMaterialSearcher');
    var list =  await searcher.getProduct().find(params,'id');
    console.log('list',list);
    
}
async function run(){
    await doRun([3723,3744])
    await doRun([3723,3744])
    await doRun([3723])
    await doRun([3723])
}
run();