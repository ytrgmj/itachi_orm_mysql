"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itachi_orm_1 = require("@dt/itachi_orm");
const itachi_util_1 = require("@dt/itachi_util");
const ProductInquiry_1 = __importDefault(require("./inquiry/ProductInquiry"));
const itachi_core_1 = require("@dt/itachi_core");
let TMaterialSearcher = class TMaterialSearcher extends itachi_orm_1.Searcher {
    getKey() {
        return "TMaterial";
    }
    getIdKey() {
        return 'id';
    }
    init(context) {
        this.reg('brand', itachi_core_1.ClazzUtil.combine(new itachi_orm_1.Inquiry({
            col: 'brand_id',
            otherCdt: { is_del: 0 }
        }), {
            _findDefDatas(array) {
                var list = [];
                for (var brand_id of array) {
                    list.push({ brand_id, name: '默认物料' });
                }
                return list;
            }
        }));
        this.reg('name', new itachi_orm_1.Inquiry({
            col: 'name'
        }));
        this.reg('brandName', new itachi_orm_1.KeysInquiry({
            keys: ['brand_id', 'name']
        }));
        this.reg('product', new ProductInquiry_1.default());
    }
    getBrand() {
        return this.get('brand');
    }
    getBrandName() {
        return this.get('brandName');
    }
    getProduct() {
        return this.get('product');
    }
};
TMaterialSearcher = __decorate([
    itachi_util_1.Server()
], TMaterialSearcher);
exports.default = TMaterialSearcher;
