<template>
  <div class="content">
    <slot></slot>
    <router-link tag='dl' :to="{name: 'detail', params:{id: item.id}}" v-for="item in msg" :key="item.id" >
      <dt><img :src="item.img_url" alt=""></dt>
      <dd>
        <b>{{item.title}}</b>
        <p>{{item.describe}}</p>
        <p class="price">￥{{item.price}}<ShopcarBtn :msg="item" /></p>
      </dd>
    </router-link>
    <!--<AAA>
      <BBB />
    </AAA>-->
  </div>
</template>

<script>
import ShopcarBtn from './ShopcarBtn';
import AAA from './aaa'
import BBB from './bbb'
export default {
  name: "productItem",
  data() {
    return{
      xfz: {
        name: 'xym',
        age: '19'
      }
    }
  },
  props: ["msg"],
  components: {
    ShopcarBtn,
    AAA,
    BBB
  },
  mounted() {
    console.log(this.xfz)
  },
};
</script>

<style lang='less'>
.content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background: #fff;
  .time{
    position: absolute;
    padding: 3px 15px;
    border-radius: 0 15px 15px 0;
    background: #fff;
    top: 5px;
    left: 0px;
    span{
      background: #000;
    }
  }
  dl {
    width: 50%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    padding-bottom: 5px;
    dt {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80%;
        height: auto;
      }
    }
    dd {
      padding-left: 20px;
      line-height: 18px;
      position: relative;
      b {
        font-size: 13px;
      }
      p {
        font-size: 12px;
        color: #666666;
      }
      .price {
        padding-right: 15px;
        color: #e50011;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
