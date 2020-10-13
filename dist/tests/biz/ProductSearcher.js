"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const itachi_orm_1 = require("@dt/itachi_orm");
const itachi_core_1 = require("@dt/itachi_core");
let ProductSearcher = class ProductSearcher extends itachi_orm_1.Searcher {
    init(context) {
        this.reg('findProductMenu', new itachi_orm_1.Inquiry({
            col: 'product_menu_id',
            otherCdt: {
                is_del: 0
            }
        }));
        this.reg('findProductMenuNo', new itachi_orm_1.KeysInquiry({
            keys: ['product_no', 'product_menu_id'],
            otherCdt: {
                is_del: 0
            }
        }));
        this.reg('findStore', new itachi_orm_1.Inquiry({
            col: 'store_id',
            otherCdt: {
                is_del: 0
            }
        }));
    }
    getKey() {
        return 'product';
    }
    findStore(pmIds, col) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get('findStore').find(pmIds, col);
        });
    }
    findProductMenu(pmIds, col) {
        return this.get('findProductMenu').find(pmIds, col);
    }
    findProductMenuNo(params, col) {
        return this.get('findProductMenuNo').find(params, col);
    }
};
ProductSearcher = __decorate([
    itachi_core_1.Server()
], ProductSearcher);
exports.default = ProductSearcher;
