<template>
    <div>

        <dl v-for="(v,i) in infodata" :key="i" ref="dl">
            <v-touch v-on:swipeleft="swiperleft(i)" v-on:tap="tap(i)" v-on:swiperight="swiperright(i)">
                <dt>
                    <small v-bind:class="i==index2 ? 'act':'none'">V</small>
                    <p>
                        <b> {{v.name}}</b>
                        <span>{{v.phone}}</span>
                    </p>
                </dt>
                <p>
                    <b style="color:red;">[{{v.label}}]</b>
                    <span>{{v.city}}</span>
                    <span>{{v.address}}</span>
                </p>
                <dd>
                    <v-touch tag="a" v-on:tap="del(i)">
                        <em v-bind:class="i==index ? 'move':''">删除</em>
                    </v-touch>

                </dd>
            </v-touch>
        </dl>

        <button @click="newAddress">+新建地址</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            infodata: window.localStorage.getItem('addressinfo') ? JSON.parse(window.localStorage.getItem('addressinfo')) : []
            , 
            index: 5,
            index1:0,
            index2: 0
        }
    },
    mounted() {
        // ...mapState(['userdetail'])
        setTimeout(function() {
            fetch("/api/userCon", {
                credentials: "include"
            }).then(res => {
                // console.log(res)
                res.json().then(data => {
                    // this.infodata = data.data
                    window.localStorage.setItem('addressinfo', JSON.stringify(data.data))
                })
            })
        }, 100)
    },
    created() {


    },
    computed:
    {

    },
    methods: {
        newAddress() {
            this.$router.push('/addressDetail')
        },
        swiperleft(index) {
            this.index = index
        },
        swiperright(index) {

            // console.log(index)
        },
        tap(index) {//默认
            this.index2 = index
        },
        del(index) {
            this.$refs.dl[index].remove()
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100%;
    background: #f1f1f1;
    position: fixed;
    left: 0;
    top: 0;
}

button {
    width: 100%;
    height: 4rem;
    background: rgb(0, 0, 0);
    color: #fff;
    text-align: center;
    line-height: 4rem;
    position: fixed;
    left: 0;
    bottom: 0;
}


dl {
    width: 100%;
    height: auto;
    padding: 2rem 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 1px #dec;
    position: relative;
}



small {
    position: absolute;
    left: 0;
    top: 0;
    width: 4rem;
    height: 2rem;
    display: block;
    text-align: center;
    line-height: 2rem;
    background: #fff;
    color: #fff;
    border-radius: 0 1rem 0 1rem;
    /*display: none;*/
}

small.act {
    background: red;
    color: #fff;
}


em {
    width: 6rem;
    height: 100%;
    /* background: #fff; */
    position: absolute;
    line-height: 4rem;
    /*right: -6rem;*/
    right: 0;
    top: 0;
    background: red;
    text-align: center;
    line-height: 7rem;
    color: #fff;
    display: none;
}

em.move {
    /*right: 0rem;
     */
    display: block;
}
</style>
