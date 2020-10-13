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
const itachi_core_1 = require("@dt/itachi_core");
const MySqlDao_1 = __importDefault(require("../../dao/MySqlDao"));
const itachi_orm_1 = require("@dt/itachi_orm");
let ProductDao = class ProductDao extends MySqlDao_1.default {
    constructor() {
        super({
            tableName: 'product',
            poolName: 'cloud',
            ids: ['product_id']
        });
    }
};
ProductDao = __decorate([
    itachi_core_1.Server(),
    itachi_orm_1.SortCol()
], ProductDao);
exports.default = ProductDao;
