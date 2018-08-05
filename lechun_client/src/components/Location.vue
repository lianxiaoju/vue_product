<template>
    <div class="location">
        <span><img src="../static/images/address.png" alt=""></span>
        <span>最快</span>
        <span>送至</span>
        <span>❯</span>
    </div>
</template>

<script>
export default {
    name: 'Location'
}
</script>

<style lang='less' scoped>
.location{
    display: flex;
    height: 45px;
    align-items: center;
    justify-content: center;
    span{
        padding-right: 5px;
        &:nth-child(1) img{
            width: 10px;
            height: auto;
        }
        &:nth-child(3) {
            color: #999;
        }
    }
}
</style>
