<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="http://resource2.lechun.cc/imgStorage/3192666929356045256.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'SwiperBanner',
    mounted () {
        new Swiper('.swiper-container', {
        loop: true,
        autoplay: 1000
        })
    }
}
</script>

<style scoped lang='less'>
.swiper-container{
  width: 100%;
  height: 128px;
  z-index: -1;
  .swiper-wrapper{
    width: 100%;
    height: 128px;
    .swiper-slide{
      width: 100%;
      height: 128px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>