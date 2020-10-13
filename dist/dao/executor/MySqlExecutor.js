"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NormalStatus_1 = __importDefault(require("./status/NormalStatus"));
const MysqlPoolFac_1 = __importDefault(require("../../poolFac/MysqlPoolFac"));
class MySqlExecutor {
    constructor(opt) {
        this._normalStatus = new NormalStatus_1.default();
        this._opt = opt;
    }
    setOpt(opt) {
        this._opt = opt;
    }
    setContext(context) {
        this._context = context;
        this._normalStatus;
    }
    _printLog(...message) {
        if (this._context == null) {
            return;
        }
        var logger = this._context.getLogger('mysql');
        logger.debug(message);
    }
    _acqStatus() {
        let ret;
        if (this._context != null) {
            let tm = this._context.get('TransManager');
            if (tm != null && tm.getTransNum() > 0) {
                ret = this._context.get('MySqlTrans');
            }
            else {
                ret = this._normalStatus;
            }
        }
        else {
            ret = this._normalStatus;
        }
        return ret;
    }
    beginTrans() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._acqStatus().beginTran();
        });
    }
    commitTrans() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._acqStatus().commitTran();
        });
    }
    rollbackTrans() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._acqStatus().rollbackTran();
        });
    }
    /**
     * 执行更新
     * @param sql
     */
    execute(sql) {
        return __awaiter(this, void 0, void 0, function* () {
            var opt = this._opt;
            var str = sql.toSql();
            var values = sql.toVal();
            let status = this._acqStatus();
            let poolName = opt.getPoolName();
            if (poolName == null || poolName == '')
                poolName = MysqlPoolFac_1.default.getDefPoolName();
            let now = new Date();
            let obj;
            try {
                obj = yield status.execute(poolName, str, values);
            }
            catch (e) {
                throw e;
            }
            finally {
                let num = new Date().getTime() - now.getTime();
                if (obj instanceof Array) {
                    this._printLog(str, values, "time:" + num, 'length:' + obj.length);
                }
                else {
                    this._printLog(str, values, "time:" + num);
                }
            }
            return obj;
        });
    }
    /**
     * 执行查询
     * @param sql
     */
    query(sql) {
        return this.execute(sql);
    }
}
exports.default = MySqlExecutor;
