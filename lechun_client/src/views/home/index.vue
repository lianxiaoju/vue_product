<template>
  <div class="wrap" ref="wrap">
    <Headers @active="active" />
    <div class="section">
      <SwiperBanner />
      <div ref="content">
        <Content v-for="item in typeList" :key="item.id">
          <template slot="title">
            <h3 :ref="item.its">{{item.title}}</h3>
            <p>{{item.sTitle}}</p>
          </template>
          <product-item :msg="item.list">
            <count-down v-if="item.id==4" class="time" :time="+new Date('2018-6-10 11:18:00')" @timeEnd="timeEnd" />
          </product-item>
        </Content>
      </div>
    </div>
    <Footers />
  </div>
</template>

<script>
import axios from "axios";
import Headers from "./component/Headers";
import Content from "./component/Content";
import SwiperBanner from '@/components/Swiper';
import Footers from "@/components/Footers";
import ProductItem from "@/components/ProductItem";
import CountDown from "@/components/CountDown";
import { mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(['typeList'])
  },
  updated() {
      //  console.log(document.documentElement.scrollTop)
  },
  methods: {
    timeEnd() {
      console.log("活动开始");
    },
    active(index) {
      // this.$refs.wrap.scrollTo(0, this.$refs.content.childNodes[index].offsetTop);
      // console.log(this.$refs.content.childNodes[index].offsetTop)
      // document.documentElement.scrollTop=this.$refs.content.childNodes[index].offsetTop
    }
  },
  components: {
    Headers,
    Content,
    SwiperBanner,
    Footers,
    ProductItem,
    CountDown
  }
};
</script>

<style lang='less' scoped>
.section {
  position: relative;
  top: 80px;
  bottom: 45px;
  padding-bottom: 22px;
  left: 0;
  width: 100%;
  overflow: auto;
}
.banner {
  width: 100%;
  height: 128px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>