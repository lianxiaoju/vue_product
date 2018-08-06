<template>
    <!--<div>-->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">

        <div>
            <div class="mark" @click="mark()"></div>
            <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDwon">
                <div class="box">
                    <p>小伙伴，选购商品满90元起送噢</p>
                    <p>
                        <b>
                            <span style="color:red;">*</span>自营商品</b>
                        <span v-if="priceSum<100" style="color:red;">自营商品还差{{(100-priceSum).toFixed(2)}}元起送</span>
                    </p>
                    <h5 v-for="(v,i) in newShopcar" :key="i">

                        <div class="sm">
                            <p>{{v.title}}</p>
                            <Addminc :dcon="v" />
                        </div>

                    </h5>
                    <div class="countAll">
                        <p>
                            <span>已选({{sumCount}})</span>
                            <span>运费：￥0.00</span>
                        </p>
                        <div>
                            <p>
                                <span style="color:red;">实付￥{{priceSum}}</span>
                                <span>总额￥{{priceSum}}</span>
                            </p>
                            <button @click="end" :class="[priceSum>100?'act':'']">结算</button>
                        </div>

                    </div>

                </div>
            </transition>
        </div>
    </transition>

    <!--</div>-->
</template>

<script>
import Addminc from '@/components/AddMic.vue'
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            flag: false,
            disblock: false
        }
    },
    updated() {
        // if(this.sum>100){
        //       this.disblock=true
        // }else{
        //      this.disblock=false
        // }
    },
    methods: {
        mark() {
            this.$emit('updata', this.flag)
        },
        end() {
            if (this.sum > 100) {
                window.sessionStorage.setItem('router', '1');
                this.$router.push('/currency')
            }
        }
    },
    components: {
        Addminc
    },
    computed: {
        ...mapState(['newShopcar']),
        ...mapGetters(['priceSum', 'sumCount'])

    }
}
</script>

<style scoped>
.mark {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
}

.box {
    width: 90%;
    height: 20rem;
    background: #fff;
    position: absolute;
    bottom: 1rem;
    left: 5%;
    border-radius: 1rem;
    z-index: 100;
}

.sm {
    width: 100;
    display: flex;
}

.sm p {
    flex: 1;
}

.sm span {
    padding: .1rem .3rem;
    border: 1px solid red;
    color: red;
    margin: .4rem;
}

.sm .add {
    background: red;
    color: #fff;
}

h5 {
    line-height: 3rem;
    padding: 0 1rem;
}

.countAll {
    width: 100%;
    height: 7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
}

.countAll p span {
    display: block;
}

.countAll div {
    /*flex:1;*/
    flex: 1;
    /* justify-content: center; */
    text-align: right;
    padding: .3rem 2rem;
}

button {
    padding: 1rem 4rem;
    background: #ccc;
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;
}

button.act {
    padding: 1rem 4rem;
    background: red;
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    border: 0;
}
</style>
