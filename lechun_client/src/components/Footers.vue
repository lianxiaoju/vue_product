<template>
    <footer>
      <nav>
        <router-link to='/home' href="javascript:;" @click="activeClass(0)" :class="{active: activeIndex === 0}">
          <i>
              <img src="../static/images/f-home.png" alt="">
              <img src="../static/images/f-home-on.png" class="on" alt="">
          </i>
          <span>主页</span>
        </router-link>
        <a href="javascript:;" class="cart" @click='showMask'>
          <i>
              <img src="../static/images/f-cart.png" alt="">
              <b :class="{active: cartCount > 5}">{{cartCount}}</b>
          </i>
          <span>购物袋</span>
        </a>
        <router-link to="/mine" href="javascript:;" @click="activeClass(1)" :class="{active: activeIndex === 1}">
          <i>
              <img src="../static/images/f-my.png" alt="">
              <img src="../static/images/f-my-on.png" class="on" alt="">
          </i>
          <span>我的</span>
        </router-link>
      </nav>
      <Cover v-show="isshow" @close='closeMask' />
    </footer>
</template>

<script>
import Cover from "./Cover";
import { mapGetters } from 'vuex';
export default {
  name: "Footers",
  data() {
    return {
      isshow: false,
      activeIndex: 0
    };
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
  methods: {
    showMask() {
      this.isshow = true;
    },
    closeMask() {
      this.isshow = false;
    },
    activeClass(index) {
      this.activeIndex = index;
    }
  },
  components: {
    Cover
  }
};
</script>

<style lang='less' scoped>
footer {
  width: 100%;
  height: 0.5rem;
  background: #fafafa;
  border-top: 1px solid #edebeb;
  position: fixed;
  bottom: 0;
  left: 0;
  nav {
    display: flex;
    a {
      flex: 1;
      height: 0.5rem;
      position: relative;
      &.active {
        color: #e50011;
      }
      b{
        position: absolute;
        top: -10px;
        left: 73px;
        display: block;
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        font-size: 12px;
        font-weight: normal;
        color: #fff;
        border-radius: 50%;
        background: rgb(154, 154, 154);
        &.active{
          background: rgb(255, 18, 0);
        }
      }
      img {
        display: block;
        width: 0.23rem;
        height: 0.23rem;
        margin: 5px auto;
        &.on {
          display: none;
        }
      }
      span {
        display: block;
        text-align: center;
        margin-top: 5px;
        font-size: 12px;
      }
      &.active {
        img {
          display: none;
        }
        img.on {
          display: block;
        }
      }
      &.cart {
        position: relative;
        img {
          width: 65px;
          height: 65px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        span {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%) scale(0.8);
        }
      }
    }
  }
}
</style>
