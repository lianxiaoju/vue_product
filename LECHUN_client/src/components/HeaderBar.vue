<template>
    <div>
        <section ref="header" class="address-wrap"><input type="hidden" id="address" value="" areaid="" address="">
            <p>
                <span class="address-icon"></span>
                <span>最快</span>
                <span class="address-date"></span>
                <span class="address-date-line">送至</span>
                <a href="/page/address/address-list.html" data-ca="跳转到地址列表" class="address-info">请选择地址</a>
                <i> ❯ </i>
            </p>
        </section>
        <header class="header">
            <Navs/>
        </header>
        <section>
            <Swipers/>
            <Navcontent/>
        </section>
    </div>
</template>

<script>
import Navs from '@/view/home/component/NavList'
import Swipers from '@/view/home/component/optional/swiper'
import Navcontent from '@/view/home/component/optional/navs'
export default {
    mounted() {
        // this.$emit('header', this.$refs.header.offsetHeight)
    },
    components: {
        Navs,
        Swipers,
        Navcontent
    }
}
</script>

<style scoped>
section {
    width: 100%;
}

.address-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0 .24rem;
    border-bottom: 1px solid #ccc;
}

.header{
    margin-top: 8rem;
}
</style>
