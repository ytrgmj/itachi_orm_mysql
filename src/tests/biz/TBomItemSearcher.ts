import {Searcher,Inquiry,BaseInquiry,KeysInquiry} from '@dt/itachi_orm';
import {Context, Server} from "@dt/itachi_util";
@Server()
export default class TBomItemSearcher extends Searcher{
    protected init(context: Context) {
        this.reg('product',new Inquiry({col:'product_id'}));
    }    
    protected getKey(): string {
        return 't_bom_item'
    }

    getProduct(){
        return this.get('product');
    }


}