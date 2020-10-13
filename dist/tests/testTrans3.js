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
const initContext_1 = __importDefault(require("./initContext"));
var context = initContext_1.default();
function addMaterial(opt) {
    return __awaiter(this, void 0, void 0, function* () {
        var dao = context.get('TMaterialDao');
        yield dao.add(opt);
    });
}
function addBomItem(opt) {
    return __awaiter(this, void 0, void 0, function* () {
        var dao = context.get('TBomItemDao');
        yield dao.add(opt);
    });
}
/**
 * 多个表
 * 没有4
 */
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let tm = context.get('TransManager');
        yield addMaterial({ name: 'aaa1' });
        yield addBomItem({ material_id: '1' });
        yield tm.beginTran();
        yield addMaterial({ name: 'aaa2' });
        yield addBomItem({ material_id: '2' });
        yield tm.commitTran();
        yield addMaterial({ name: 'aaa3' });
        yield addBomItem({ material_id: '3' });
        yield tm.beginTran();
        yield addMaterial({ name: 'aaa4' });
        yield addBomItem({ material_id: '4' });
        yield tm.rollbackTran();
        yield addMaterial({ name: 'aaa5' });
        yield addBomItem({ material_id: '5' });
    });
}
run();
