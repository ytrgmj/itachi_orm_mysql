"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const itachi_orm_1 = require("@dt/itachi_orm");
const itachi_util_1 = require("@dt/itachi_util");
let TBomItemSearcher = class TBomItemSearcher extends itachi_orm_1.Searcher {
    init(context) {
        this.reg('product', new itachi_orm_1.Inquiry({ col: 'product_id' }));
    }
    getKey() {
        return 't_bom_item';
    }
    getProduct() {
        return this.get('product');
    }
};
TBomItemSearcher = __decorate([
    itachi_util_1.Server()
], TBomItemSearcher);
exports.default = TBomItemSearcher;
