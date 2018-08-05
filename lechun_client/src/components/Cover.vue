<template>
  <div class="mask" @click="closeMask">
    <div class="area" @click.stop>
      <p>
        <i></i>
        <span>小伙伴，选购商品满90元起送噢</span>
      </p>
      <ul v-for="item in shopcarList" :key="item.id" class="content">
        <li>
          <CheckBox name="checkItem" :value="item.isCheck" @input="checkItem(arguments[0], item.id)" />
          <span>{{item.title}}</span>
          <span><ShopcarBtn class="shopcarBtn" :msg='item' /></span>
        </li>
      </ul>
      <p class="total">
        <span><CheckBox name="checkAll" v-model="checkAll" @click.native="checkAllFn" />全选</span>
        <span><em>{{checkCount}}</em> 盒商品<br /><b>合计：</b><em>￥ {{countPrice}}</em></span>
        <span v-if="countPrice < 90">还差{{ 90 - countPrice }}元起送</span>
        <router-link tag='span' to='/settlement' v-else class="settlement">结算</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import ShopcarBtn from '@/components/ShopcarBtn'
import CheckBox from './CheckBox'
export default {
  name: "Cover",
  computed: {
    shopcarList() {
      return this.$store.state.shopcarList
    },
    isCheckAll () {
      return this.$store.getters['isCheckAll']
    },
    checkCount () {
      return this.$store.getters['checkCount']
    },
    countPrice () {
      return Math.round( this.$store.getters['countPrice'])
    }
  },
  created () {
    this.checkAll = this.isCheckAll
  },
  watch: {
    isCheckAll (newVal) {
      this.checkAll = newVal
    }
  },
  methods: {
    closeMask() {
      this.$emit('close');
    },
    checkItem (isCheck, id) {
      this.$store.commit('setIsCheck', {id, isCheck})
    },
    checkAllFn () {
      this.$store.commit('setCheckAll', !this.checkAll)
    }
  },
  components: {
    ShopcarBtn,
    CheckBox
  }
};
</script>

<style lang='less' scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  .area {
    width: 96%;
    margin-left: 2%;
    border-radius: 5px;
    background: #fff;
    position: absolute;
    bottom: 5px;
    left: 0;
    p {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:nth-child(1) {
        padding: 12px 0;
        border-bottom: 1px solid #f5f5f5;
        i {
          width: 35px;
          height: 23px;
          display: block;
          background: url("../static/images/alert_cart.png") no-repeat;
          background-size: cover;
        }
        span {
          margin-right: 10px;
          font-size: 13px;
        }
      }
    }
    ul{
      display: flex;
      flex-direction: column;
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
        font-size: 13px;
        border-bottom: 1px solid #f5f5f5;
        color: #979797;
        input{
          flex: .1;
        }
        span{
          &:nth-child(1) {
            flex: 2;
            margin-left: 10px;
          }
          &:nth-child(2) {
            flex: 1.5;
          }
        }
      }
    }
    .total{
      padding: 10px;
      display: flex;
      align-items: center;
      span {
        &:nth-child(1) {
          flex: 1;
        }
        &:nth-child(2) {
          flex: 2.5;
          line-height: 20px;
          margin-left: 10px;
        }
        &:nth-child(3) {
          padding: 7px;
          background: #dcdcdc;
          color: #fff;
          border-radius: 5px;
        }
      }
      .settlement{
        background: #e50011!important;
      }
      em {
        color: #e50011;
        font-style: normal;
      }
    }
  }
}
</style>
