import initContext from './initContext'
import ProductDao from './biz/TProductDao';
async function  run(){
    let context = initContext();
    let dao:ProductDao = context.get('productDao');
    let list = await dao.find({})
    console.log(list);
    
}
run();