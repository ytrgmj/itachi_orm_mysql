import { Searcher, BaseInquiry } from '@dt/itachi_orm';
import { Context } from "@dt/itachi_util";
export default class TMaterialSearcher extends Searcher {
    protected getKey(): string;
    getIdKey(): string;
    protected init(context: Context): void;
    getBrand(): BaseInquiry;
    getBrandName(): BaseInquiry;
    getProduct(): BaseInquiry;
}
