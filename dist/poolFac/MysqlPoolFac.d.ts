import mysql from 'mysql';
import { BasePoolFac, BaseOption } from 'itachi_orm';
interface MySqlOption extends BaseOption {
    user: string;
}
declare class MysqlPoolFac extends BasePoolFac {
    getType(): string;
    _needNoType(): boolean;
    protected _formatConnectOption(config: BaseOption): MySqlOption;
    protected createPool(config: any): mysql.Pool;
}
declare const _default: MysqlPoolFac;
export default _default;
