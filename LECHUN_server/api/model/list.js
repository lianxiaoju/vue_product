const connect = require('../db/connect');//抛出一个变量，与数据库建立连接

const userInfo = ({
    phone
}) =>{
    const sql = 'SELECT * FROM  list where `phone`=?';
    return new Promise((resolve,reject)=>{
        connect.query(sql,[phone],(error,res)=>{
            // console.log(res[0])
            if(error){
                reject();
                return;
            };
               resolve(res[0]); 

        })
    })
};




module.exports = {
    userInfo,
 
}