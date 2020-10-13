"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const itachi_core_1 = require("@dt/itachi_core");
const itachi_orm_1 = require("@dt/itachi_orm");
const MysqlContext_1 = __importDefault(require("../context/MysqlContext"));
function init() {
    itachi_orm_1.ConfigFac.init(path_1.default.join(__dirname, '../../tests/json'));
    var fileContext = new itachi_core_1.FileContext();
    fileContext.loadFromPath(path_1.default.join(__dirname, './biz'));
    itachi_orm_1.OrmContext.regContext(fileContext);
    MysqlContext_1.default.regContext(fileContext);
    var context = fileContext.buildChild();
    return context;
}
function default_1() {
    return init();
}
exports.default = default_1;
