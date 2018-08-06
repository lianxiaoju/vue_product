<template>
    <div class="wrapper">

        <ul class="header">
            <li @click="addclass(0)" :class="count==0?'active':''">
                <a href="#">自盒自选</a>
                <em></em>
            </li>
            <li @click="addclass(1)" :class="count==1?'active':''">
                <a href="#">纤巧装</a>
                <em></em>
            </li>
            <li @click="addclass(2)" :class="count==2?'active':''">
                <a href="#">家庭装</a>
                <em></em>
            </li>
            <li @click="addclass(3)" :class="count==3?'active':''">
                <a href="#">福利社</a>
                <em></em>
            </li>
        </ul>
       
    </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
    name: "",
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        headerBar: {
            type: Number,
            default: 0
        }
    },
   
    data() {
        return {
            count: 0,
            top: 0
        }
    },
    methods: {
        addclass(index) {
            this.count = index
            this.$emit('upIndex', this.count)
        }
    },
    computed: {
        // ...mapState(['arrTop'])

    },
    mounted() {
        // this.top = this.$refs.nav.offsetTop + this.$refs.nav.offsetHeight
        // this.$emit('upTop', this.top)
    },
    updated() {
        // console.log(document.documentElement.scrollTop)
    },



}
</script>

<style scoped>
.header {
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    top: 3rem;
    z-index: 3;
    background: #fff;
    box-shadow: 1px 1px 1px 1px #ccc;
}

ul {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    display: flex;
    border-bottom: 1px solid #ccc;
}

ul li {
    flex: 1;
    text-align: center;
    position: relative;
}

ul li.active a {
    color: red;
}

ul li.active em {
    width: 1.6rem;
    height: 1rem;
    position: absolute;
    left: 40%;
    top: 2rem;
    display: block;
    color: red;
    border-bottom: 3px solid red;
}


</style>
