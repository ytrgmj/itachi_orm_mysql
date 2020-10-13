
import path from 'path'
import {FileContext} from '@dt/itachi_core'
import { ConfigFac,OrmContext } from '@dt/itachi_orm'
import MysqlContext from '../context/MysqlContext'

function init() {
    ConfigFac.init(path.join(__dirname, '../../tests/json'))
    var fileContext = new FileContext()
    fileContext.loadFromPath(path.join(__dirname,'./biz'));
    OrmContext.regContext(fileContext)
    MysqlContext.regContext(fileContext);
    var context = fileContext.buildChild();
    return context;
}


export default function(){
    return init();
}