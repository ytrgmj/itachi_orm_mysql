"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itachi_orm_1 = require("@dt/itachi_orm");
const MySqlExecutor_1 = __importDefault(require("./executor/MySqlExecutor"));
class MySqlDao extends itachi_orm_1.SqlDao {
    _acqExecutor() {
        let context = this.getContext();
        if (this._executor == null) {
            var opt = this._opt;
            let mysqlExecutor;
            mysqlExecutor = new MySqlExecutor_1.default(opt);
            mysqlExecutor.setContext(context);
            this._executor = mysqlExecutor;
        }
        return this._executor;
    }
}
exports.default = MySqlDao;
