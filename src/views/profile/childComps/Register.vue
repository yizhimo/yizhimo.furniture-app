<template>
  <div id="register">
      <top-bar><div slot="left" @click="registerBack">返回</div></top-bar>
        <div class="registerBox">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名 :"
                    placeholder="请设置用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"/>
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码 :"
                    placeholder="请设置密码"
                    :rules="[{ required: true, message: '请填写密码' }]"/>
                <div style="margin: 16px;">
                <van-button round block color="#feaa48" native-type="submit">
                    立即注册
                </van-button>
                </div>
            </van-form>
            <div class="registerSign">
                <a @click="aSign">已有账号,去登录~</a>
            </div>
        </div>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'

// import { request } from 'network/axios.js'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        // 点击注册
        onSubmit(values) {
            // console.log(values);

            //调用自己封装的toast组件方法
            this.$toast.show('注册成功,请登录', 2000)

            this.$store.commit('register', values)
            this.$router.push('/sign')
            // request({
            //     url: '/demo.json',
            //     method: 'post',
            //     data: 'values'
            // }).then(res => {
            //     console.log(res)
            // })
        },
        aSign() {
            this.$router.push('/sign')
        },
        registerBack() {
            this.$router.push('/profile')
        }
    }
}
</script>

<style scoped>
    #register {
        height: 100vh;
        position: relative;
        background-color: #fff;
        z-index: 999;
    }
    #register .registerBox {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 200px;
        width: 100%;
        margin: auto 0;
    }
    .registerSign a {
        display: block;
        text-align: center;
    }
</style>