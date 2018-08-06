<template>
    <div>
        <div class="boxCon" ref="boxCon">
            <slot name="title"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: []
        }
    },
    methods: {

    },
    mounted() {
      

        // console.log(arr)
        // this.$store.commit('SETTOP',this.$refs.boxCon.offsetTop)
        // setTimeout(function() {
        //     console.log(this.$boxConrefs.boxCon)
        // }, 100);
    },
}
</script>

<style scoped>
.boxCon {
    width: 100%;
    height: auto;
    text-align: center;
    background: #dec;
}

.boxCon h3,
.boxCon p {
    width: 100%;
    line-height: 4rem;
}
</style>
