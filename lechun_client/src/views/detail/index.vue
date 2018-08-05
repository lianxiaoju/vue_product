<template>
    <div>
        <div class='detail-page'>
            <img :src="msg.bg_url" alt="">
            <div class="area">
                <h3>{{msg.title}}<span>￥{{msg.price}}元/盒</span></h3>
                <p>{{msg.describe}}</p>
                <div class="spec">
                    <ul>
                        <li v-for="(item, index) in msg.spec" :key="index">{{item.label}}: {{item.value}}</li>
                    </ul>
                    <p><ShopcarBtn :msg="msg" /></p>
                </div>
                <p class="introduce">产品介绍:</p>
                <p class="introduce-content" v-html="msg.introduce"></p>
                <div class="img"><img :src="msg.detail_img" alt=""></div>
                <div class="box">
                    <b>--营养成分--</b>
                    <span>nutrition</span>
                    <img :src="msg.constituent" alt="">
                </div>
                <div class="box">
                    <b>--配料表--</b>
                    <span>ingredients</span>
                    <p>{{msg.ingredients}}</p>
                </div>
            </div>
        </div>
        <ProductItem :msg='listData' />
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import ShopcarBtn from '@/components/ShopcarBtn';
import { mapState } from 'vuex';
export default {
    name: 'detail',
    data() {
        return {
            msg: ''
        }
    },
    computed: {
        ...mapState(['listData'])
    },
    watch: {
        '$route'() {
            // console.log('1111')
            this.getDetail();
        }
    },
    created () {
        this.getDetail();  
    },
    methods: {
        getDetail() {
            this.$store.dispatch('getDetail', this.$route.params.id).then((data) => {
                console.log(data)
                this.msg = data;
            })
        }
    },
    components: {
        ProductItem,
        ShopcarBtn
    }
}
</script>

<style lang='less' scoped>
.detail-page{
    width: 100%;
    height: 100%;
    background: #e3e3e3;
    padding-bottom: 10px;
    img{
        width: 100%;
        height: auto;
    }
    .area{
        margin: 0 10px;
        background: #fff;
        border-radius: 5px;
        z-index: 1;
        padding: 10px;
        line-height: 20px;
        h3{
            span{
                color: #e50011;
                font-weight: normal;
                float: right;
                font-size: 12px;
            }
        }
        p{
            color: #e50011;
            font-size: 12px;
        }
        .spec{
            display: flex;
            margin-top: 20px;
            ul{
                flex: 1;
                padding: 7px 0;
                border-top: 1px solid #bcbcbc;
                border-bottom: 1px solid #bcbcbc;
                li{
                    list-style: none;
                    font-size: 12px;
                    line-height: 18px;
                }
            }
            p{
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                & > span {
                    display: block;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: #e50011 url("../../static/images/icon-sku-cart.png")
                    center center no-repeat;
                    background-size: 15px 15px;
                }
            }
        }
        .introduce{
            color: #979797;
            font-size: 13px;
            padding-top: 25px;
        }
        .introduce-content{
            color: #000;
            padding: 3px 0 10px;
        }
        .box{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            b{
                font-size: 13px;
                color: #e50011;
            }
            span{
                color: #b6b6b6;
                font-size: 12px;
                padding-bottom: 10px;
            }
            p{
                color: #000;
                border: 1px solid #a7a7a7;
                padding: 7px;
                line-height: 18px;
            }
        }
    }
}

</style>
