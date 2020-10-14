import { Searcher } from '@dt/itachi_orm';
import { Context } from '@dt/itachi_core';
export default class ProductSearcher extends Searcher {
    protected init(context: Context): void;
    protected getKey(): string;
    findStore(pmIds: any, col?: any): Promise<any>;
    findProductMenu(pmIds: any, col?: any): any;
    findProductMenuNo(params: any, col?: any): any;
}
