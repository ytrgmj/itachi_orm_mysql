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
const MySqlDao_1 = __importDefault(require("../../dao/MySqlDao"));
const itachi_util_1 = require("@dt/itachi_util");
let TMaterialDao = class TMaterialDao extends MySqlDao_1.default {
    constructor() {
        super({
            tableName: 'material',
            ids: ['id']
        });
    }
};
TMaterialDao = __decorate([
    itachi_util_1.Server()
], TMaterialDao);
exports.default = TMaterialDao;
