import path from 'path'
import { ConfigFac } from '@dt/itachi_orm'
function init() {
    ConfigFac.init(path.join(__dirname, './json'))
}
export default { init }

it.skip('test',function(){
    console.log('=============');
})
