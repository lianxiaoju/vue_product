<template>
    <div>
        <img src="https://wx.lechun.cc/static/images/login-bg.png?v=f831f31" alt="">
        <ul>
            <li>
                <label for="phone">手机号</label>
                <input type="text" id="phone" v-model="phone" placeholder="注册手机号">
            </li>
            <li>
                <label for="pwd">密码</label>
                <input type="text" id="pwd" v-model="pwd" placeholder="注册密码">
            </li>
            <li>
                <label for="name">姓名</label>
                <input type="text" id="name" v-model="name" placeholder="姓名">
            </li>
            <li>
                <button @click="register">注册</button>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            phone: '',
            pwd: '',
            name: ''
        }
    },
    methods: {
        register() {
            var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if (reg.test(this.phone)) {
                // console.log(this.phone, this.pwd, name)
                fetch("/api/register?phone=" + this.phone + "&paw=" + this.pwd + "&message=" + this.name, {
                    credentials: "include"
                }).then(res => {
                    res.json().then(data => {
                        if (data.code == 0) {
                            console.log('注册失败')
                        } else if (data.code == 1) {

                            this.$router.push('/login')
                        }
                        // if (data.code == 0) {
                        //     console.log(data.msg)
                        // }
                        // console.log(data)
                    })
                })
            } else {
                alert('您输入的手机号格式不正确')
            }

        }
    }
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
