<template>
    <div class="mine">
        <div class="message">
            <p><img src="" alt=""></p>
            <span>18201084548 ></span>
        </div>
        <h2>我的订单<span>查看全部订单></span></h2>
        <div class="status">
            <p><img src="https://m.lechun.cc/images/member/icon-status-1.png" alt=""><span>待付款</span></p>
            <p><img src="https://m.lechun.cc/images/member/icon-status-2.png" alt=""><span>待发货</span></p>
            <p><img src="https://m.lechun.cc/images/member/icon-status-3.png" alt=""><span>待收货</span></p>
            <p><img src="https://m.lechun.cc/images/member/icon-status-4.png" alt=""><span>待评价</span></p>
        </div>
        <ul class="msg">
            <li><p><img src="https://m.lechun.cc/images/member/icon-edit.png" alt="">修改订单</p><span>></span></li>
            <li><p><img src="https://m.lechun.cc/images/member/icon-money.png" alt="">储值/余额</p><span>></span></li>
            <li><p><img src="https://m.lechun.cc/images/member/icon-coupons.png" alt="">我的优惠券</p><span>></span></li>
            <li><p><img src="https://m.lechun.cc/images/member/icon-adress.png" alt="">我的地址</p><span>></span></li>
            <li><p><img src="https://m.lechun.cc/images/member/icon-feedback.png" alt="">意见反馈</p><span>></span></li>
            <li><p><img src="https://m.lechun.cc/images/member/icon-contact.png" alt="">联系客服</p><span>></span></li>
        </ul>
        <span class="exit-logon">退出登录</span>
    </div>
</template>

<script>
export default {
    name: 'Mine'
}
</script>

<style scoped lang='less'>
.mine{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    .message{
        height: 110px;
        background: #1e1f21;
        display: flex;
        align-items: center;
        & > p{
            width: 55px;
            height: 55px;
            border: 2px solid #757677;
            border-radius: 50%;
            margin-left: 20px;
        }
        span{
            color: #fff;
            margin-left: 10px;
            font-size: 18px;
        }
    }
    h2{
        color: #323232;
        font-size: 16px;
        margin-bottom: 1px;
        background: #fff;
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .status{
        display: flex;
        background: #fff;
        padding: 20px 0;
        p{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                display: block;
                width: 25px;
                height: 25px;
            }
            span{
                font-size: 12px;
                margin-top: 5px;
                color: #999;
            }
        }
    }
    .msg{
        li{
            background: #fff;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1px;
            color: #777777;
            p{
                display: flex;
                align-items: center;
                img{
                    display: block;
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                }
            }
            &:nth-child(1) {
                margin: 10px 0;
            }
            &:nth-child(5) {
                margin-top: 10px;
            }
        }
    }
    .exit-logon{
        display: block;
        width: 100%;
        margin-top: 10px;
        padding: 15px 0;
        color: #e50011;
        text-align: center;
        background: #fff;
    }
}
</style>
