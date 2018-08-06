<template>
    <div class="box">
        <div class="topBox">
            <dl>
                <dt>
                    <img :src="newdata.detail_img" alt="">
                </dt>
                <div ref="toBe" class="toBe">
                    <dd>
                        <h6> {{newdata.describe}}</h6>
                        <span>{{newdata.title}}</span>
                    </dd>
                    <dd>
                        <span style="color:red;">￥{{newdata.price}}/盒</span>
                        <div class="right">
                            <!--<button @click="ClickImg(newdata,index)" v-if="!newdata.stock">加入购物车</button>-->
                            <p v-show="newdata.stock">
                                <Addminc :dcon="newdata" />
                            </p>
                        </div>
                    </dd>
                    <div>
                        <p>
                            {{newdata.introduce}}
                        </p>
                        <img :src="newdata.bg_url" alt="">
                        <p style="color:red;textAlign:center;lineHeight: 2rem;">-营养成分-</p>
                        <img :src="newdata.constituent" alt="">
                    </div>
                </div>

            </dl>
        </div>
        <Contain :data="list"/>

        <Footers/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Footers from '@/components/FooterBar.vue'
import Contain from '@/components/HomeContent.vue'
import Addminc from '@/components/AddMic.vue'
export default {
    created() {
        this.getDetail()
    },
    data() {
        return {
            newdata: {}
      
        }
    },
    computed: {
       ...mapState(['list'])
    },
    methods: {
        getDetail() {
            fetch('/api/detail?id=' + this.$route.query.id, {
                credentials: 'include'
            }).then(res => {
                return res.json()
            }).then(data => {
                this.newdata = data.data[0]
                console.log(data.data[0])
            })
        }
    },
    mounted() {
        // console.log()
    },

    components: {
        Footers,
        Contain,
        Addminc
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    /*position: relative;*/
}

.topBox {
    width: 100%;
    height: 73rem;
}

.topBox dl dt img {
    width: 100%;
}

.toBe {
    width: 80%;
    height: 80%;
    background: #dec;
    position: absolute;
    margin: 10%;
}


dl {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

img {
    display: block;
    width: 100%;
}

.contain {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 6rem;
}

.contain dl {
    width: 46%;
    height: auto;
    margin: 0 auto;
    text-align: center;
    padding: .6rem;
    position: relative;
}

.contain dl dd span {
    line-height: 2rem;
}

.contain dl dt img {
    width: 100px;
    /* height: 100px; */
    margin: 0 auto;
    display: block;
}

dd img {

    width: 2.4rem;
    height: 2.4rem;
    display: inline-block;
    margin-top: 1rem;
    position: absolute;
    right: 2rem;
    top: 11rem;
}

.minc {
    width: 2rem;
    height: 2rem;
    /* padding: .3rem; */
    border: 1px solid red;
    display: inline-block;
    border-radius: 50%;
    color: red;
    text-align: center;
    line-height: 2rem;
}

.add {
    width: 2rem;
    height: 2rem;
    /* padding: .3rem; */
    border: 1px solid #ccc;
    background: red;
    color: #fff;
    display: inline-block;
    border-radius: 50%;
    text-align: center;
    line-height: 2rem;
}











/*.right {
    position: absolute;
    right: 1.2rem;
    bottom: .12rem;
}*/

.active {
    display: block;
}
</style>
