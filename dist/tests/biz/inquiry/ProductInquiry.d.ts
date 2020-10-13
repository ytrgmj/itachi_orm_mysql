import { TablesInquiry } from '@dt/itachi_orm';
export default class ProductInquiry extends TablesInquiry {
    protected _findFromOtherSearcher(params: any): Promise<any>;
}
