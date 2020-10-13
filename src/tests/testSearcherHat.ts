import initContext from './initContext'
import {SearcherHat} from '@dt/itachi_orm'

var context = initContext();
async function doRun(){
    var list = [
        {product_id:3723},
        {product_id:3744}
    ]

    var hat = new SearcherHat({
        context,
        key:'tmaterial',
        funName:'product',
        dataCol:'product_id'
    })
    await hat.process(list);
    console.log('list',JSON.stringify(list));
    
}
doRun();