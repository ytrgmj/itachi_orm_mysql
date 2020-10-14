import { SqlDao } from 'itachi_orm';
import { IExecutor } from 'itachi_orm';
export default class MySqlDao extends SqlDao {
    protected _executor: IExecutor;
    protected _acqExecutor(): IExecutor;
}
