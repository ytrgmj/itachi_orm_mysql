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
const itachi_orm_1 = require("@dt/itachi_orm");
const initContext_1 = __importDefault(require("./initContext"));
var list = [
    { product_no: 'aa' },
    { product_no: 'bb' },
    { product_no: 'aa' }
];
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let context = initContext_1.default();
        let hat = new itachi_orm_1.NoHat({
            key: 'product',
            context
        });
        yield hat.process(list);
        console.log('list', list);
    });
}
run();
