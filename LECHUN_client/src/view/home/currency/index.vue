<template>
    <div class="wrapper">
        <div class="header">
            <span> {{name}}</span>
            <span>{{phone}}</span>
            <div class="right">冷链配送</div>
            <p>山西省太原市 ></p>
        </div>
        <div class="data">
            <span>配送日期</span>
            <span>周五 (可选日期)</span>
        </div>
        <ul>
            <li>
                <span>优惠卷</span>
                <span>-￥0.00></span>
            </li>
            <li v-for="(v,item) in newlist" :key="v.id" class="shopcar">
                <dl>
                    <dt>
                        <img :src="v.img_url" alt="">
                    </dt>
                    <dd>
                        <h6>{{v.title}}</h6>
                        <small>{{v.describe}}</small>
                    </dd>
                    <span class="ri">{{v.price}}X{{v.count}}盒</span>
                </dl>

            </li>
            <li>
                <p>商品合计
                    <span>￥{{sum}}</span>
                </p>
                <p>邮费
                    <span>免运费</span>
                </p>
                <p>优惠券
                    <span>-￥0.00</span>
                </p>
                <p>使用余额
                    <span>-￥2.00</span>
                </p>
            </li>
        </ul>
        <div class="Top">
            <p style="color:red;">2-6摄氏度冷藏 | 开盖后24小时内信用 | 若孔清析出不影响信用</p>
            <p style="color:#ccc;">由于雾霾、大雾天气、航空延误等不可抗力因素，部分地区的小酸奶可能会晚些送到，请耐心等待噢。</p>
            <p>购物须知
                <span style="width:1rem;height:1rem;font-size:.5rem;display:inline-block;border-radius:50%;background:#000;color:#fff;text-align:center;line-height:1rem;">?</span>
            </p>
        </div>
    
        <div class="footer">
            <span>实付￥{{this.sum}}</span>
            <span>立即支付</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            newlist: window.localStorage.getItem('newList') ? JSON.parse(window.localStorage.getItem('newList')) : '',
            name:window.localStorage.getItem('information')?JSON.parse(window.localStorage.getItem('information')).message:'雅疯子',
            phone:window.localStorage.getItem('information')?JSON.parse(window.localStorage.getItem('information')).phone:'18813049617',
            
        }
    },
    methods: {

    },
    mounted() {

    },
    computed: {
        ...mapState(['sum'])
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    font-size: 1.6rem;
    padding:0 1rem;
    box-sizing: border-box;
}

.header {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #ccc;
}

.data {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 6px solid #dec;
    display: flex;
}

.data span {
    flex: 1;
    text-align: center;
}

.header p {
    line-height: 3rem;
}

.wrapper ul li {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
    line-height: 3rem;
}
.shopcar {
    width: 100%;
    height: auto;
}
.shopcar dl{
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
}
.shopcar dl dt img{
    width: 5rem;
    height: auto;
    padding: 1rem;
}
.ri {
    position: absolute;
    right: 0;
    top: 0.3rem;
}

.wrapper ul li p {
    text-align: right;
    line-height: 4rem;
}

.Top {
    /*border-top: 1px solid #fff;*/
    margin-top: 2rem;
}

.Top p {
    line-height: 3rem;
}


.right {
    padding: .4rem;
    border-radius: 1rem 0 0 1rem;
    background: red;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0.3rem;
}




.footer {
    width: 100%;
    height: 4rem;
    background: red;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
}

.footer span {
    flex: 1;
    line-height: 4rem;
    text-align: center;
}

.footer span:nth-child(1) {
    background: #dec;
    color: #666666;
}

.footer span:nth-child(2) {
    background: red;
    font-weight: bold;
    color: #fff;
}
</style>
