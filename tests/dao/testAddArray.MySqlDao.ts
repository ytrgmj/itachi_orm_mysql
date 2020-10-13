import MySqlDao from '../../src/dao/MySqlDao';
import testDb from '../testDb';


testDb.init();

test('testAddArray', async function () {
    const dao = new MySqlDao({
        tableName: 'material'
    })
    const arr = [
        { name: 'kai1', remark: 'addarr1' },
        { name: 'kai2', remark: 'addarr2' }
    ]

    await dao.addArray(arr)
    // console.log('array ===> ', arr)
})
