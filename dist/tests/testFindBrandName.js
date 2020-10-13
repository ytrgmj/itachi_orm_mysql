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
function doRun(param) {
    return __awaiter(this, void 0, void 0, function* () {
        var searcher = context.get('TMaterialSearcher');
        var list = yield searcher.getBrandName().find(param);
        console.log('list.length', list.length);
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield doRun([{ brand_id: 100273, name: '1花生' },
            { brand_id: 100273, name: '虫草' },
            { brand_id: 100001, name: '100' }
        ]);
        yield doRun([{ brand_id: 100273, name: '1花生' }, { brand_id: 100273, name: '虫草' }]);
        yield doRun([{ brand_id: 100273, name: '1花生' }, { brand_id: 100273, name: '虫草' }]);
        yield doRun({ brand_id: 100273, name: '1花生' });
        yield doRun({ brand_id: 100273, name: '1花生' });
    });
}
run();
