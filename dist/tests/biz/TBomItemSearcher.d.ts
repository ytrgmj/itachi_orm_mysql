import { Searcher } from '@dt/itachi_orm';
import { Context } from "@dt/itachi_util";
export default class TBomItemSearcher extends Searcher {
    protected init(context: Context): void;
    protected getKey(): string;
    getProduct(): any;
}
