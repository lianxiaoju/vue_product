const connect = require('../db/connect')

const select = (options) => {
    const sql = 'select * from product'
    return new Promise((resolve, reject) => {
        connect.query(sql, [], (error, res) => {
            // console.log(res)
            if (error) {
                reject();
                return;
            }
            resolve(res)
        })
    })
}

module.exports = {
    select
}