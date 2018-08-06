<template>
    <div>
        <img src="https://wx.lechun.cc/static/images/login-bg.png?v=f831f31" alt="">
        <ul>
            <li>
                <input type="text" placeholder="输入手机号" v-model="val"><br><br>
            </li>
            <li>
                <input type="text" v-model="yanzhnegma" placeholder="短信验证码"><br><br>
                <div class="getY">
                    <span @click="click" v-if="!yzm">获取验证码</span>
                    <span v-if="yzm">
                        <b style="color:skyblue;">验证码：</b>{{yzm}}
                    </span>
                </div>
            </li>

        </ul>
        <button @click="deng">登陆</button>
    </div>
</template>
 <script>

export default {
    data() {
        return {
            val: "",
            yanzhnegma: "",
            yzm: '',
            countdown: 60
        }
    },
    methods: {
        click() {
            var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if (reg.test(this.val)) {
                fetch("/api/yanzheng?phone=" + this.val, {
                    credentials: "include"
                }).then(res => {
                    res.json().then(data => {
                        console.log(data)
                        if (data.code == 0) {
                            this.$router.push('/register')
                        } else if (data.code == 1) {
                            alert('发送成功')
                            this.yzm = data.yanzheng
                            window.localStorage.setItem('information', JSON.stringify(data.find))
                            //    this.settime(this)

                        }
                    })
                })
            } else {
                alert('请输入正确的手机号')
            }


        },
        deng() {
            fetch("/api/login?phone=" + this.val + "&yanzheng=" + this.yanzhnegma, {
                credentials: "include"
            }).then(res => {
                res.json().then(data => {
                    // console.log(data)
                    if (data.code == 1) {
                        if (window.sessionStorage.getItem('router') == '1') {
                            this.$router.push("/currency")
                        } else {
                            this.$router.push({ path: '/wode' })

                        }
                        // console.log(window.localStorage.getItem('router'))
                    } else if (data.code == 0) {
                        alert(data.msg)
                    }
                })
            })

        }


    },
    mounted() {

    },
}
</script>
<style scoped>
img {
    width: 40%;
    display: block;
    margin: 2rem auto;
}

ul {

    /*width: 88%;
    height: auto;
    padding: 0 6%;
    box-sizing: border-box;
*/
    width: 96%;
    height: auto;
    padding: 0 9%;
    box-sizing: border-box;
}



ul li {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid #dec;
    position: relative;
}

ul li .getY {
    position: absolute;
    right: 0;
    bottom: 0;
}

ul li input {
    width: 80%;
    height: 80%;
    border: 0rem;
}

button {
    width: 83%;
    height: 4rem;
    border-radius: 1rem;
    line-height: 4rem;
    text-align: center;
    color: #fff;
    background: #000;
    margin: 2rem;
    padding: 0 8%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>