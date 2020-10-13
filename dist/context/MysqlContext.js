"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class MysqlContext {
    static regContext(context) {
        context.regComponent('DbTrans', MySqlTrans_1.default, 'MySqlTrans');
    }
}
exports.default = MysqlContext;
const MySqlTrans_1 = __importDefault(require("../dao/executor/status/MySqlTrans"));
