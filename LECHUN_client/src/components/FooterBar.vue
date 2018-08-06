<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="/home" replace>
                    <i class="iconfont icon-guangpan"></i>
                    <b>主页</b>
                </router-link>
            </li>
            <!--<li>-->
            <li class="midd"  @click="Alert()">
                <img src="http://m.lechun.cc/images/member/f-cart.png" alt="">
                <b>购物袋</b>
                <span :class="sumCount>4?'act':''">{{sumCount}}</span>
            </li>
            <li>
                <router-link to="/wode" replace>
                    <i class="iconfont icon-gongzuojilu"></i>
                    <b>我的乐纯</b>
                </router-link>
            </li>
        </ul>
        <AlertBox v-if="flag" @updata="Ao" />
         <!--@updata="Ao"-->

    </div>
</template>

<script>
import AlertBox from '@/components/AlertBox.vue'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            flag: false
        }
    },
    updated() {

    },
    components: {
        AlertBox
    },
    methods: {
        Alert() {
            this.flag = true;
        },
        Ao(val) {
            this.flag = val
        }
    },

    computed: {
        ...mapGetters(['sumCount'])

    }
}
</script>

<style scoped>
.footer {
    width: 100%;
    height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #ccc;
    background: #fff;
    z-index: 8;
}

.footer ul {
    width: 100%;
    height: 4rem;
    display: flex;
    line-height: 1.2;
    margin-top: .6rem;
}

.footer ul li {
    flex: 1;
    text-align: center;
}

.router-link-active {
    color: #fb7414;
}

.footer ul li i {
    display: block;
}

.midd {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 5rem;
    height: 5rem;
    display: block;
    top: -80%;
    position: absolute;
}

.footer ul li b {
    text-align: center;
    position: relative;
    font-size: 1.4rem;
    display: block;
    padding: .12rem;
    border-radius: 50%;
    z-index: 99;
}

.footer ul li {
    position: relative;
}

.footer ul li span {
    position: absolute;
    top: -62%;
    right: 24%;
    width: 1.6rem;
    height: 1.6rem;
    display: block;
    background: #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 1.6rem;
    color: #fff;
}

.footer ul li span.act {
    position: absolute;
    top: -62%;
    right: 24%;
    width: 1.6rem;
    height: 1.6rem;
    display: block;
    background: red;
    border-radius: 50%;
    text-align: center;
    line-height: 1.6rem;
    color: #fff;
}
</style>
