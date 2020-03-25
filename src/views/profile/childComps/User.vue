<template>
  <div id="user">
    <div class="userTop">
      <div class="userImg">
          <img src="~assets/img/profile/user.svg" alt="">
      </div>
      <div class="userIn">
        <div v-if="this.$store.state.token">
          <span @click="sign">登录/</span>
          <span @click="register">注册?</span> 
        </div>
        <div v-else>
          <span>您好,{{this.$store.state.name}}</span> 
        </div>
      </div>
    </div>
    <div class="userBottom">
        <div>
            <img src="~assets/img/profile/daizhifu.svg" alt="">
            <div><span>待支付</span></div>
        </div>
        <div>
            <img src="~assets/img/profile/daifahuo.svg" alt="">
            <div><span>待发货</span></div>
        </div>
        <div>
            <img src="~assets/img/profile/daishouhuo.svg" alt="">
            <div><span>待收货</span></div>
        </div>
        <div>
            <img src="~assets/img/profile/yiwancheng.svg" alt="">
            <div><span>已完成</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        sign() {
            this.$router.push('/sign')
        },
        register() {
            this.$router.push('/register');
        }
    }
}
</script>

<style>
    #user {
        width: 98%;
        margin: 8px auto 8px;
        border-radius: 10px;
        background-color: var(--color-high-text);
    }
    .userTop {
        display: flex;
        padding-bottom: 15px;
    }
    .userImg {
        width: 60px;
        height: 60px;
        background-color: rgb(230, 230, 230);

        margin: 18px 0 0 10px;
        border: var(--color-high-text) 1px solid;
        text-align: center;
        border-radius: 50%;
    }
    .userImg img {
        margin-top: 4px;
    }
    .userIn {
        flex: 1;
        height: 70px;
        margin: 10px 0 0 10px;
        position: relative;
    }
    #user .userIn div {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: 10% 0;
    }
    .userIn span {
        font-size: 16px;
        color: #fff;
    }

    .userBottom {
        padding-top: 10px;
        border-radius: 0 0 10px 10px;
        background-color: #fff;
        display: flex;
    }
    .userBottom > div {
        color: #666;
        font-size: 14px;
        text-align: center;
        flex: 1;
    }
    .userBottom img {
        width: 40%;
        height: 40%;
    }
    .userBottom > div >div {
        font-size: 10px;
        margin-top: 3px;
    }
</style>