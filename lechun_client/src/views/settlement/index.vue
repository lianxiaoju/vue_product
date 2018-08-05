<template>
    <div>
        <ul class="message">
            <li>您还没有填写配送地址，请点击添加<span>></span></li>
            <li>配送日期<span>请选择配送时间 ></span></li>
            <li>优惠券<span>-￥0.00 ></span></li>
        </ul>
        <dl class="pay" v-for="item in shopcarList" :key="item.id">
            <dt><img :src="item.img_url" alt=""></dt>
            <dd>
                <b>{{item.title}}</b>
                <p>{{item.describe}}</p>
            </dd>
            <p><span>￥{{item.price}} x {{item.count}}盒</span></p>
        </dl>
        <div class="pay-bar">
            <p>您还没有填写配送地址,请添加</p>
            <div>
                <p>实付 <span>￥{{countPrice}}</span></p>
                <p>立即支付</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Settlement',
    computed: {
        ...mapState(['shopcarList']),
        countPrice () {
            return Math.round( this.$store.getters['countPrice'])
        }
    }
}
</script>

<style scoped lang='less'>
.message{
    li{
        padding: 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        font-size: 16px;
        &:nth-child(1){
            font-size: 11px;
        }
        span{
            color: #999999;
            font-size: 12px;
        }
    }
}
.pay{
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin-left: 20px;
    padding: 10px 0;
    dt{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: auto;
        }
    }
    dd{
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        line-height: 20px;
        font-size: 12px;
        color: #999999;
        b{
            font-size: 14px;
            color: #777777;
        }
    }
    & > p{
        padding-right: 15px;
        margin-top: 20px;
    }
}
.pay-bar{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        p{
            padding: 15px 0;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                font-size: 16px;
                color: #666666;
            }
            &:nth-child(1){
                flex: 2;
            }
            &:nth-child(2){
                flex: 3;
                background: rgba(153,153,153,1);
                color: #fff;
            }
        }
    }
    & > p{
        background: #f6969d;
        color: #fff;
        font-size: 12px;
        padding: 10px;
    }
}
</style>
