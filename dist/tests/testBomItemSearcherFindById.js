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
function testRun(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var searcher = context.get('TbomItemSearcher');
        console.log(yield searcher.getById(id));
    });
}
function doRun(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        var searcher = context.get('TbomItemSearcher');
        var list = yield searcher.findByIds(ids);
        //console.log(list);
        console.log('list.length', list.length);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield testRun(679);
        yield doRun([679, 678]);
        yield doRun([679, 678]);
    });
}
run();
