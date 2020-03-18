<template>
  <div id="register">
      <top-bar><div slot="left" @click="registerBack">返回</div></top-bar>
        <div class="registerBox">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名 :"
                    placeholder="请输入用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"/>
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码 :"
                    placeholder="请输入密码"
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
        onSubmit(values) {
            console.log('submit', values);
            this.$router.push('/sign')
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

<style>
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