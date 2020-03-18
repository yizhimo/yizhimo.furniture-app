<template>
    <div id="sign">
        <top-bar><div slot="left" @click="signBack">返回</div></top-bar>
        <div class="signBox">
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
                    登录
                </van-button>
                </div>
            </van-form>
            <div class="signRegister">
                <a @click="aRegister">没有账号?去注册~</a>
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
            console.log('submit', values)
            this.$router.push('/profile')
        },
        aRegister() {
            this.$router.push('/register')
        },
        signBack() {
            this.$router.push('/profile')
        }
    }
}
</script>

<style>
    #sign {
        height: 100vh;
        position: relative;
        background-color: #fff;
        z-index: 999;
    }
    #sign .signBox {
        position: absolute;
        top: 0;
        bottom: 0;
        height: 200px;
        width: 100%;
        margin: auto 0;
    }
    .signRegister a {
        display: block;
        text-align: center;
    }
</style>