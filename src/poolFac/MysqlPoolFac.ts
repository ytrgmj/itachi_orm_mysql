/*
 * @Author       : kaikai.hou
 * @Email        : kaikai.hou@downtown8.com
 * @Description  : Balabala
 * @Date         : 2020-02-05 10:47:48
 * @LastEditors  : kaikai.hou
 * @LastEditTime : 2020-02-14 14:49:19
 */

import mysql from 'mysql'
import { BasePoolFac, BaseOption } from 'itachi_orm'

interface MySqlOption extends BaseOption {
    user: string
}
class MysqlPoolFac extends BasePoolFac {

    getType(){
        return 'mysql'
    }

    _needNoType(){
        return true;
    }

    protected _formatConnectOption(config: BaseOption): MySqlOption {
        let _config: MySqlOption = Object.assign({}, { user: '' }, config)

        if (!_config.user) _config.user = _config.username
        return _config
    }

    protected createPool(config) {
        config = this._formatConnectOption(config)
        const pool = mysql.createPool(config)
        return pool;
    }
}
export default new MysqlPoolFac();
