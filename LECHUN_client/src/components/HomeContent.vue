<template>
    <div class="wrapper" ref="wrap">
        <div class="contain">
            <!--{{data}}-->

            <dl v-for="(vs,ind) in data" :key="ind">
                <dt>
                    <img :src="vs.img_url" alt="" @click="goBack(vs,ind)">
                </dt>
                <dd>
                    <h6> {{vs.title}}</h6>
                    <span>{{vs.describe}}</span>
                </dd>
                <dd>
                    <span class="hez" style="color:red;">￥{{vs.price}}/盒</span>
                    <div class="right">
                        <!--<img @click="ClickImg(vs)" v-if="!vs.stock" src="../../static/img/img6.png" alt="">-->
                        <p v-show="vs.stock">
                            <Addminc :dcon="vs" />
                        </p>
                    </div>
                </dd>
            </dl>

        </div>

    </div>
</template>

<script>
import Addminc from '@/components/AddMic.vue'
export default {
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            arr: [],
            index: 0,
            // newdata: this.data ? this.data : JSON.parse(window.localStorage.getItem('datalist'))

        }
    },
    components: {
        Addminc
    },
    methods: {
        ClickImg(v) {
            this.$store.commit('COUNT', v)
        },

        goBack(val, ind) {
            // this.$store.commit('DETAIL', val)
            this.$router.push({path:`/detail/${ind}`,query:{id:val.id}})
        }

    },
    mounted() {


    },


}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: auto;
    margin: 0 auto;
}

.box {
    width: 100%;
    height: 150px;
    background: #dec;
    margin: 0 auto;
}

.box p,
.box span {
    line-height: 3rem;
    text-align: center;
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
    padding: 1.7rem 0;
    position: relative;
}

.contain dl dd span {
    line-height: 2rem;
}

.contain dl dt img {
    width: 100px;
    height: 100px;
}

dd img {
    width: 2.4rem;
    height: 2.4rem;
    display: inline-block;
    margin-top: 1rem;
}

.right {
    position: absolute;
    right: 1.2rem;
    bottom: -0.7rem;
}

.active {
    display: block;
}



.hez {
    color: red;
    /* text-align: left; */
    position: absolute;
    left: 3rem;
}
</style>
