<template>
    <div class="nav">
        <p>
            <a href="#">120万品牌推荐</a>
            <a href="#">五星级酒店的选择</a>
            <a href="#">超模也有明星酸奶</a>
        </p>
        <dl>
            <dt>
            <img src="http://m.lechun.cc/images/index/index-icon-vip.png" alt="">
            </dt>
            <dd>
                <b>会员专享</b>
                <span>
                    <small style="color:red;">福利</small>发放中</span>
            </dd>
        </dl>
        <dl>
            <dt>
           <img src="http://m.lechun.cc/images/index/index-icon-balance.png" alt="">
            </dt>
            <dd>
                <b>储值有礼</b>
                <span>低至
                    <small style="color:red;">95折</small>
                </span>
            </dd>
        </dl>
        <dl>
            <dt>
            <img src="http://m.lechun.cc/images/index/index-icon-long.png" alt="">
            </dt>
            <dd>
                <b>包月套餐</b>
                <span>最高省
                    <small style="color:red;">600元</small>
                </span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.nav{
    width: 100%;
    height: 10rem;
    background:#fff;
}
p {
    width: 100%;
    height: 3rem;
    display: flex;
    line-height: 3rem;
}

p a {
    flex: 1;
    text-align: center;
}

dl {
    float: left;
    width: 33%;
    text-align: center;
    background:#fff;
}
dl b{
    display: block;
}
 dl dt img{
     width: 3rem;
     height: 3rem;
 }
</style>
