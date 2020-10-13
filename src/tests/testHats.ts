import {Hat} from '@dt/itachi_orm'
import initContext from './initContext'

var context = initContext();
var list = [
    {
        tmaterial_id:3050
    },
    {tmaterial_id:3051},
    {tmaterial_id:3052},
]
async function doRun(fun?){
    var hat = new Hat({
        context,
        fun,
        key:'tmaterial'
    })
    await hat.process(list);
    console.log(list);
    
}
async function run(){
    await doRun();
    await doRun(function(row,hatData){
        row.hatData = hatData;
    })
}
run();