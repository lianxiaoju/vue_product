<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" id="swiper-wrap">
            <!-- slides -->
            <swiper-slide class="swiper-slide" v-for="(v,i) in img" :key="i">
                <img :src="v" />
            </swiper-slide>
            <div class="swiper-pagination" id="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
    name: 'carrousel',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            img: [
                "http://resource2.lechun.cc/imgStorage/3192666929356045256.png",
                "http://resource2.lechun.cc/imgStorage/3192666929356045256.png",
                "http://resource2.lechun.cc/imgStorage/3192666929356045256.png",
                "http://resource2.lechun.cc/imgStorage/3192666929356045256.png"
            ],
            swiperOption: {
                notNextTick: true,
                //循环
                loop: true,
                //设定初始化时slide的索引
                initialSlide: 0,
                //自动播放
                autoplay: {
                    delay: 1500,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                //滑动速度
                speed: 800,
                //滑动方向
                direction: 'horizontal',
                //小手掌抓取滑动
                grabCursor: true,
                //滑动之后回调函数
                on: {
                    slideChangeTransitionEnd: function() {
                        //   console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    },
                },
                //左右点击
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
                //分页器设置         
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'custom',
                    //自定义分页器样式
                    renderCustom: function(swiper, current, total) {
                        const activeColor = '#fff'
                        const normalColor = 'orange'
                        let color = ''
                        let paginationStyle = ''
                        let html = ''
                        for (let i = 1; i <= total; i++) {
                            if (i === current) {
                                color = activeColor
                            } else {
                                color = normalColor
                            }
                            paginationStyle = `background:${color};opacity:1;margin-right:10px;`
                            html += `<span class="swiper-pagination-bullet id='swiper-pagination-bullet'" style=${paginationStyle}></span>`
                        }
                        return html
                    }
                }
            }
        }
    },

    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    mounted() {
        // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        // console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#swiper-wrap .swiper-slide {
    width: 100%;
}

#swiper-wrap .swiper-slide img {
    width: 100%;
    height: auto;
}

#swiper-pagination {
    display: flex;
    justify-content: flex-end;
}

#swiper-pagination #swiper-pagination-bullet {
    border-radius: 0;
}
</style>
