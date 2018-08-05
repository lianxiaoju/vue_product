<template>
    <header>
        <Location />
        <nav ref='nav'>
            <a href="javascript:;" @click="active(0)" :class="{active: currentIndex === 0}">单盒自选</a>
            <a href="javascript:;" @click="active(1)" :class="{active: currentIndex === 1}">纤巧装</a>
            <a href="javascript:;" @click="active(2)" :class="{active: currentIndex === 2}">家庭装</a>
            <a href="javascript:;" @click="active(3)" :class="{active: currentIndex === 3}">福利社</a>
        </nav>
        <span class="line-bar" :style="{left: lineleft}"></span>
    </header>
</template>

<script>
import Location from '@/components/Location.vue'
export default {
    name: 'Headers',
    data() {
        return{
            currentIndex: 0,
            lineleft: 0
        }
    },
    components: {
        Location
    },
    watch: {
      currentIndex (newVal) {
        this.$emit('active', newVal)
      }
    },
    methods: {
        active(index) {
            this.currentIndex = index;
            this.changeLeft();
        },
        changeLeft() {
            const navWidth = this.$refs.nav.clientWidth;
            const navItem = this.$refs.nav.children.length;
            const itemWidth = parseInt(navWidth) / navItem;
            this.lineleft = itemWidth * this.currentIndex + (itemWidth / 2) + 'px';
        }
    },
    mounted () {
        this.changeLeft();
    }
}
</script>

<style lang='less' scoped>
header {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  nav {
    width: 100%;
    display: flex;
    a {
      flex: 1;
      padding: 10px 0;
      text-align: center;
      font-size: 14px;
      &.active{
          color: #e50011;
      }
    }
  }
  .line-bar {
    display: block;
    width: 25px;
    height: 2px;
    background: #e50011;
    position: absolute;
    bottom: 2px;
    transform: translateX(-50%);
  }
}
</style>
