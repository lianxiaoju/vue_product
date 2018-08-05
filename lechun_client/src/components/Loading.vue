<template>
    <div class="loading-wrap" v-show="isShow">
        <div class="loading-box">
            ...正在加载
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            show() {
                this.isShow = true
            },
            hide() {
                this.isShow = false
            }
        }
    }
</script>

<style scoped lang="less">
.loading-wrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    .loading-box {
        width: 100px;
        padding: 20px;
        background: rgba(0,0,0,0.5);
        border-radius: 5px;
        color: #fff;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>