import { SqlDao } from '@dt/itachi_orm';
import { IExecutor } from '@dt/itachi_orm';
export default class MySqlDao extends SqlDao {
    protected _executor: IExecutor;
    protected _acqExecutor(): IExecutor;
}
