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
const ExecutorStatus_1 = __importDefault(require("./ExecutorStatus"));
class MySqlTrans extends ExecutorStatus_1.default {
    constructor() {
        super(...arguments);
        this._map = {};
    }
    /**
     * 得到链接
     * @param poolName
     */
    getConnection(poolName) {
        return __awaiter(this, void 0, void 0, function* () {
            let conn = this._map[poolName];
            if (conn == null) {
                let pool = yield MysqlPoolFac_1.default.get(poolName);
                conn = yield this.getConnFromPool(pool);
                this._map[poolName] = conn;
            }
            return conn;
        });
    }
    getConnFromPool(pool) {
        return new Promise(function (resolve) {
            pool.getConnection(function (err, connection) {
                resolve(connection);
            });
        });
    }
    execute(poolName, sql, values) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = yield this.getConnection(poolName);
            return new Promise(function (resolve, reject) {
                connection.query(sql, values, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        });
    }
    /**
     * 得到所有链接
     */
    getAllConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            var keys = MysqlPoolFac_1.default.getKeys();
            var ret = [];
            for (var key of keys) {
                ret.push(yield this.getConnection(key));
            }
            return ret;
        });
    }
    doWithConnection(connection, funName) {
        return new Promise(function (resolve, reject) {
            connection[funName](function (err) {
                if (err) {
                    try {
                        reject(err);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                else {
                    try {
                        resolve();
                    }
                    catch (e) {
                        reject(e);
                    }
                }
            });
        });
    }
    beginTran() {
        return __awaiter(this, void 0, void 0, function* () {
            var connections = yield this.getAllConnection();
            for (let conn of connections) {
                yield this.doWithConnection(conn, 'beginTransaction');
            }
        });
    }
    commitTran() {
        return __awaiter(this, void 0, void 0, function* () {
            let tm = this.getTransManager();
            let num = tm.getTransNum();
            var connections = yield this.getAllConnection();
            for (let conn of connections) {
                yield this.doWithConnection(conn, 'commit');
                if (num <= 0) {
                    conn.release();
                }
            }
            if (num <= 0) {
                this._map = {};
            }
        });
    }
    rollbackTran() {
        return __awaiter(this, void 0, void 0, function* () {
            var connections = yield this.getAllConnection();
            let tm = this.getTransManager();
            let num = tm.getTransNum();
            for (let conn of connections) {
                yield this.doWithConnection(conn, 'rollback');
                if (num <= 0) {
                    conn.release();
                }
            }
            if (num <= 0)
                this._map = {};
        });
    }
}
exports.default = MySqlTrans;
const MysqlPoolFac_1 = __importDefault(require("../../../poolFac/MysqlPoolFac"));
