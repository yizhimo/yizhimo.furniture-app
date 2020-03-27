<template>
  <div id="start" v-if="this.$store.state.isGoHome">
    <div @click="goHome">跳过 {{time}}s</div> 
    <div class="textOne">家具购</div>
    <div class="textTwo">给你一个温暖的家</div>
    <img src="~assets/img/home/start.png" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            time: 5,
            timer: null
        }
    },
    mounted() {
        this.autoPlay()
    },
    methods: {
        // 跳转
        goHome() {
            this.$store.commit('goHome')
        },
        play() {
            this.time --;
            if(this.time == 0) {
                this.goHome()
            }
        },
        // 开启定时器
        autoPlay() {
            this.timer = setInterval(this.play, 1000)
        }
    },
    // 关闭定时器
    destroyed() {
        clearInterval(this.timer)
    }
}
</script>

<style>
    #start div {
        position: fixed;
        top: 3%;
        right: 5%;
        color: var(--color-high-text);
        font-size: 14px;
    }
    #start img {
        width: 100%;
        height: 100vh;
    }
    #start .textOne {
        position: fixed;
        top: 25%;
        right: 48%;
        width: 34px;
        font-size: 16px;
        font-weight: 700;
        padding: 10px;
        border-radius: 8px;
        color: #ffffff;
        background-color: #ffb056;
    }
    #start .textTwo {
        position: fixed;
        top: 35%;
        right: 41%;
        width: 30px;
        font-size: 12px;
        font-weight: 700;
        padding: 10px;
        border-radius: 6px;
        color: #ffffff;
        background-color: #ffb056;
    }
</style>