<template>
    <div class="shopcarBtn">
        <span v-if="count === 0" @click.prevent="add"></span>
        <div class="cart" v-else>
          <span class="minus" @click.prevent="minus">-</span>
          <output>{{count}}</output>
          <span class="add" @click.prevent="add">+</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "shopcarBtn",
  props: ["msg"],
  computed: {
    count() {
      const cartItem = this.$store.state.shopcarList[this.msg.id];
      if (cartItem) {
          return cartItem.count
      } else {
          return 0
      }
    }
  },
  methods: {
    add() {
      this.$store.commit('add', this.msg);
    },
    minus() {
      this.$store.commit('minus', this.msg.id);
    }
  }
};
</script>

<style lang='less' scoped>
.shopcarBtn {
  &>span {
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #e50011 url("../static/images/icon-sku-cart.png") center center no-repeat;
    background-size: 15px 15px;
  }
  .cart{
    display: flex;
    span{
      width: 22px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e50011;
      color: #e50011;
      box-sizing: border-box;
      border-radius: 50%;
    }
    .add{
      background: #e50011;
      color: #fff;
    }
    output{
      width: 22px;
      text-align: center;
      color: #000;
    }
  }
}
</style>
