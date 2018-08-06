<template>
    <div>
        <img  v-if="count===0" src="../../static/img/img6.png" @click.prevent="add" alt="">
        <div v-else>
            <span class="minc" @click.prevent="minc">-</span>
            <output>{{count}}</output>
            <!--<b>{{count}}</b>-->
            <span class="add" @click.prevent="add">+</span>
        </div>

    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    props: {
        dcon: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        minc() {
            this.$store.commit('MINC', this.dcon)
        },
        add() {
            this.$store.commit('ADD', this.dcon)
        },
    },
    computed: {
        count() {
            const cartItem = this.$store.state.newShopcar[this.dcon.id];
            // console.log(cartItem)
            if (cartItem) {
                return cartItem.count
            } else {
                return 0
            }
        }
    },
    mounted() {
        // console.log(this.count)
    },
}
</script>

<style scoped>
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

img{
    width: 30px;
    height: 30px;
}
</style>
