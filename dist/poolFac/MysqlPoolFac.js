"use strict";
/*
 * @Author       : kaikai.hou
 * @Email        : kaikai.hou@downtown8.com
 * @Description  : Balabala
 * @Date         : 2020-02-05 10:47:48
 * @LastEditors  : kaikai.hou
 * @LastEditTime : 2020-02-14 14:49:19
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const itachi_orm_1 = require("itachi_orm");
class MysqlPoolFac extends itachi_orm_1.BasePoolFac {
    getType() {
        return 'mysql';
    }
    _needNoType() {
        return true;
    }
    _formatConnectOption(config) {
        let _config = Object.assign({}, { user: '' }, config);
        if (!_config.user)
            _config.user = _config.username;
        return _config;
    }
    createPool(config) {
        config = this._formatConnectOption(config);
        const pool = mysql_1.default.createPool(config);
        return pool;
    }
}
exports.default = new MysqlPoolFac();
