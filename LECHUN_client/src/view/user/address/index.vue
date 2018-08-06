<template>
    <div class="address">
        <ul>
            <li>
                <label for="name">联系人</label>
                <input type="text" placeholder="请输入姓名" v-model="name">
            </li>
            <li>
                <label for="name">手机号</label>
                <input type="text" placeholder="请输入电话" v-model="phone">
            </li>
            <li>
                <label for="name">城市</label>
                <input type="text" placeholder="请选择省市区" v-model="city">
            </li>
            <li>
                <label for="name">收货地址</label>
                <input type="text" placeholder="请输入详细地址" v-model="addre">
            </li>
        </ul>
        <div class="add">
            <h6>选择地址标签</h6>
            <p>
                <a href="#" @click="start='住宅'" :class="start=='住宅'?'act':''">住宅</a>
                <a href="#" @click="start='公司'" :class="start=='公司'?'act':''">公司</a>
                <a href="#" @click="start='学校'" :class="start=='学校'?'act':''">学校</a>
                <a href="#" @click="start='家人'" :class="start=='家人'?'act':''">家人</a>
                <a href="#" @click="start='朋友'" :class="start=='朋友'?'act':''">朋友</a>
                <a href="#" @click="start='其他'" :class="start=='其他'?'act':''">其他</a>
            </p>
        </div>
        <button @click="save" v-bind:style="{'background':this.flag ? 'rgb(229, 0, 17)':''}">保存</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            start: '住宅',
            name: '',
            phone: '',
            city: '',
            addre: '',
            flag: false
        }
    },
    methods: {
        save() {
            var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

            if (this.name && this.city && this.addre && this.start && this.phone) {
                if (reg.test(this.phone)) {
                    this.flag = true
                    setTimeout(function() {
                        window.location.href = '/addressDetail/detail';
                    }, 1000)
                    fetch("/api/userdetail?name=" + this.name + "&phone=" + this.phone + "&city=" + this.city + "&address=" + this.addre + "&label=" + this.start, {
                        credentials: "include"
                    }).then(res => {
                        res.json().then(data => {
                            // console.log(data)
                           
                        })
                    })
                } else {
                    alert('手机号有误')
                }


            } else {
                alert('请填写内容')
            }
        }
        // alert(index){
        //     this.start=index
        //     console.log(this.start)
        // }
    }
}
</script>

<style scoped>
.address {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 1rem;
}

ul {
    width: 100%;
    height: auto;
}

ul li {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #ccc;
}

ul li input {
    border: 0;
    line-height: 2.6rem;
}

.add h6 {
    line-height: 6rem;
}

.add p {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
}

.add p a {
    width: 30%;
    display: inline-block;
    line-height: 3rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid #ccc;
    color: #dec;
    margin: .3rem;
}

p a.act {
    color: #000;
    border: 1px solid #000;
}


button {
    width: 90%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 2rem;
    color: #fff;
    background: #c9c9c9;
    margin: 1rem 5%;
    border: 0;
}
</style>
