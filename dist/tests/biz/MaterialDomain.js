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
const itachi_util_1 = require("@dt/itachi_util");
const itachi_orm_1 = require("@dt/itachi_orm");
let MaterialServer = class MaterialServer {
    setContext(context) {
        this._context = context;
    }
    test1() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tmaterialDao.add({ name: 'aaa1' });
            yield this.vdMaterialDao.add({ name: 'aaa1' });
        });
    }
    test2() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tmaterialDao.add({ name: 'aaa2' });
            yield this.vdMaterialDao.add({ name: 'aaa2' });
        });
    }
    test3() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tmaterialDao.add({ name: 'aaa3' });
            yield this.vdMaterialDao.add({ name: 'aaa3' });
            throw new Error('test3 出错了');
        });
    }
    test4(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.test1();
            yield this.test2();
            try {
                yield this.test3();
            }
            catch (e) {
                console.error(e);
            }
            yield this.tmaterialDao.add({ name });
            yield this.vdMaterialDao.add({ name });
        });
    }
    test5(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.test1();
            yield this.test2();
            yield this.tmaterialDao.add({ name });
            yield this.vdMaterialDao.add({ name });
            yield this.test3();
        });
    }
};
__decorate([
    itachi_util_1.Bean()
], MaterialServer.prototype, "tmaterialDao", void 0);
__decorate([
    itachi_util_1.Bean()
], MaterialServer.prototype, "vdMaterialDao", void 0);
__decorate([
    itachi_orm_1.Trans()
], MaterialServer.prototype, "test1", null);
__decorate([
    itachi_orm_1.Trans()
], MaterialServer.prototype, "test2", null);
__decorate([
    itachi_orm_1.Trans()
], MaterialServer.prototype, "test3", null);
__decorate([
    itachi_orm_1.Trans()
], MaterialServer.prototype, "test4", null);
__decorate([
    itachi_orm_1.Trans()
], MaterialServer.prototype, "test5", null);
MaterialServer = __decorate([
    itachi_util_1.Server()
], MaterialServer);
exports.default = MaterialServer;
