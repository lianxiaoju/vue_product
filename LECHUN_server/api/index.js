var express = require('express');
var router = express.Router();
var conn = require('./db/connect');
var user = require('./model/list')
var product = require('./model/product')
var Add = require('./model/address')
/* GET home page. */
router.get('/yanzheng', async function (req, res, next) {
    var phone = req.query.phone;
    let find = await user.userInfo({ phone })
    var yanzheng = parseInt(Math.random() * 1000000)
    // var successA = parseInt(Math.random() * 1000000)
    res.cookie("yanzheng", yanzheng)
    if (find) {//与你输入一致
        res.json({
            code: 1,
            find,//数据
            yanzheng,
            msg: 'success'
        })
        //  res.cookie("successA", successA)

    } else {
        res.json({
            code: 0,
            msg: 'Please you go to register'
        })
    }

});

//注册成功
router.get('/register', function (req, res, next) {
    let phone = req.query.phone;
    let paw = req.query.paw;
    let message = req.query.message

    let sql = 'insert into list (phone, paw, message) values (?, ?, ?)';
    conn.query(sql, [phone, paw, message], (error, result) => {
        if (error) throw error;
        res.json({
            code: 1,
            msg: '注册成功'
        })
    })
});

//判断验证码一样时为登录成功
router.get('/login', async function (req, res, next) {
    var phone = req.query.phone;
    var yanzheng = req.query.yanzheng;
    if (req.cookies.yanzheng === yanzheng) {
        res.json({
            code: 1,
            msg: "登录成功"
        })
    } else {
        res.json({
            code: 0,
            msg: "登录失败，验证码错误"
        })
    }
});

//nav距离顶部
router.get('/typearr', function (req, res, next) {
    conn.query('select * from classification', (err, result) => {
        if (err) throw err;
        let count = 0;
        result.forEach((item, index) => {
            if (item.list) {
                let arr = JSON.parse(item.list).join(',')

                let sql = 'select * from product where id in (' + arr + ')';

                conn.query(sql, (err, result2) => {
                    console.log(result2)
                    count += 1;
                    if (err) throw err;
                    item.list = result2;
                    if (count === result.length) {
                        res.json(result)
                    }
                })
            } else {
                count += 1;
            }
        })
    })
})
//获取到购物车数据
router.get('/shopcar', async function (req, res, next) {
    let data = await product.select()
    res.json({
        code: 1,
        data: data
    })
})

//添加个人的具体信息及地址
router.get('/userdetail', async function (req, res, next) {
    console.log(req.query.phone)

    let phone = req.query.phone;
    let name = req.query.name;
    let city = req.query.city
    let address = req.query.address
    let label = req.query.label


    let sql = 'insert into userdetail (phone, name, city ,address , label) values (?, ?, ?, ?, ?)';
    conn.query(sql, [phone, name, city, address, label], (error, result) => {

        if (error) throw error;
        res.json({
            code: 1,
            msg: '上传成功',
            data: result
        })
    })
});

// 地址用户具体信息
router.get('/userCon', function (req, res, next) {
    const sql = 'select * from userdetail'
    conn.query(sql, [], (error, result) => {
        if (error) {
            return;
        }
        res.json({
            data: result
        })
    })
})

router.get('/detail', function (req, res, next) {
    let id = req.query.id;
    console.log(id)
    const sql = 'select * from product where `id`=?'
    conn.query(sql, [id], (error, result) => {
        if (error) {
            return;
        }
        console.log(id)
        res.json({
            data: result
        })
    })
})






module.exports = router;
