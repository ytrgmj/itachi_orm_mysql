"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExecutorStatus {
    setContext(context) {
        this._context = context;
    }
    getTransManager() {
        return this._context.get('TransManager');
    }
}
exports.default = ExecutorStatus;
