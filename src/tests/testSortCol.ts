import initContext from './initContext'
import ProductDao from './biz/TProductDao';
async function  run(){
    let context = initContext();
    let dao:ProductDao = context.get('productDao');
    await dao.add({product_name:'testSOrt'})
    await dao.add({product_name:'testSOrt'})
    await dao.add({product_name:'testSOrt'})
    await dao.addArray([
        {product_name:'testSOrt1'},
        {product_name:'testSOrt2'},
        {product_name:'testSOrt3'}
    ])
    await dao.update({
        product_id:15,
        product_name:'aaa'
    })
}
run();