<template>
    <div class="user_name">
        <div class="user_header">
            <!--<div class="user_img">-->
            <img class="user_img" :src="url_img" alt="">
            <!--<span>></span>-->
            <!--</div>-->
            <p class="user_phone">{{phone}}</p>
            <div class="user_info">
                <p>会员最高享9折</p>
                <span>点击进入会员中心</span>
            </div>
        </div>
        <div class="user_ding">
            <h1>
                <b>我的订单</b>
                <span>查看全部订单></span>
            </h1>
            <p>
                <a href="#">待付款</a>
                <a href="#">待发货</a>
                <a href="#">待收货</a>
                <a href="#">待评价</a>
            </p>
        </div>
        <ul>
            <li>
                <small>修改订单</small>
                <span>0个></span>
            </li>
        </ul>
        <ul>

            <li>
                <small>储值/佘额</small>
                <span style="color:red;">0个></span>
            </li>
            <li>
                <small>我的优惠券</small>
                <span style="color:red;">0个></span>
            </li>
            <li @click="address">
                <small>我的地址</small>
                <span>></span>
            </li>
        </ul>
        <ul>
            <li>
                <small>意见反馈</small>
                <span>></span>
            </li>
            <li>
                <small>联系客服</small>
                <span>></span>
            </li>
        </ul>
        <p class="login" @click="ouTLogin">退出登录</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: window.localStorage.getItem('information') ? JSON.parse(window.localStorage.getItem('information')).phone : '',
            url_img: window.localStorage.getItem('information') ? JSON.parse(window.localStorage.getItem('information')).headerimg : '',
            name: window.localStorage.getItem('information') ? JSON.parse(window.localStorage.getItem('information')).message : '',
        }
    },
    methods: {
        address() {
            if (!window.localStorage.getItem('addressinfo')) {
                this.$router.push('/addressDetail')
            } else {
                this.$router.push('/addressDetail/detail')
            }
        },
        ouTLogin() {
            // setCookie(yanzheng, ' ', -1);
            // console.log(document.cookie.indexOf('yanzheng'))
            // window.localStorage.removeItem('')
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            console.log(keys)
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        },
        clearCookie() {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        }
    },
    mounted() {
        // console.log( JSON.parse(window.localStorage.getItem('information')))
        // this.phone = window.localStorage.getItem('mphone') ? window.localStorage.getItem('mphone') : this.$route.query.phone
    },
}
</script>

<style scoped>
.user_name {
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
}

.user_header {
    width: 100%;
    height: 6rem;
    background: #000;
    color: #fff;
    display: flex;
}

.user_header .user_phone {
    margin: 1.6rem;
}

.user_img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: #fff;
}

.user_img span {
    color: #000;
    text-align: center;
    margin-left: 2.4rem;
    line-height: 3rem;
}

.user_info {
    position: absolute;
    right: 0;
    top: 1rem;
}

.user_ding {
    width: 100%;
    height: auto;
}

.user_ding h1 {
    font-size: 1.6rem;
    line-height: 4rem;
    padding: 0 1rem;
    border-bottom: 1px solid #F1F1F1;
}

.user_ding h1 {
    display: flex;
    justify-content: space-between;
}

p {
    display: flex;
}

p a {
    flex: 1;
    text-align: center;
    line-height: 6rem;
}

ul {
    width: 100%;
    height: auto;
    border-bottom: 1rem solid #F1F1F1;
}

ul li {
    /*width: 100%;*/
    display: flex;
    line-height: 4rem;
    padding: 0 1rem;

    /*justify-content: space-around;*/
}

ul li small {
    flex-basis: 6rem;
}

ul li span {
    flex: 1;
    text-align: right;
}

p.login {
    width: 100%;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    color: red;
    display: block;
    margin: 0 auto;
    font-size: 2rem;
}
</style>
