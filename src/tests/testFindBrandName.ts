import TMaterialSearcher from './biz/TMaterialSearcher'
import initContext from './initContext'

var context = initContext();
async function doRun(param){
    var searcher:TMaterialSearcher = context.get('TMaterialSearcher');
    var list = await searcher.getBrandName().find(param);
    console.log('list.length',list.length);
}
async function run(){
    await doRun([{brand_id:100273,name:'1花生'},
        {brand_id:100273,name:'虫草'},
        {brand_id:100001,name:'100'}
    ]);
    await doRun([{brand_id:100273,name:'1花生'},{brand_id:100273,name:'虫草'}]);
    await doRun([{brand_id:100273,name:'1花生'},{brand_id:100273,name:'虫草'}]);
    await doRun({brand_id:100273,name:'1花生'});
    await doRun({brand_id:100273,name:'1花生'});
}
run();