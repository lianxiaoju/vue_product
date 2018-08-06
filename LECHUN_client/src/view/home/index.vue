<template>
    <div>
        <HeaderBar/>
        <Optional/>
        <FooterBar/>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Optional from './component/optional'
import FooterBar from '@/components/FooterBar'


import "@/mock"
import axios from 'axios'
// import { mapState, mapActions } from 'vuex'
export default {
    name: '',
    data() {
        return {
            // index: 0,
            // headerbar: 0,
            // top: 0,

        }
    },
    updated() {

    },
    methods: {
        UIndex(index) {
            this.index = index;
            console.log(this.arrTop[index])
            document.body.scrollTop=this.arrTop[index]

        }
    },
    components: {
        FooterBar,
        HeaderBar,
        Optional,

    },
    mounted() {
        // fetch('/api/shopcar', {
        //     credentials: 'include'
        // }).then(res => {
        //     return res.json()
        // }).then(data => {
        //     // this.$store.commit('GETDATA', data.data)
        // })

    },
    computed: {
        // ...mapState(['list', 'arrTop'])
    },

}
</script>

<style>

</style>
