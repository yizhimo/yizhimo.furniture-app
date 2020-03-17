<template>
  <div id="center">
    <div>
        <img src="~assets/img/profile/tongzhi.svg" alt="">
        <div class="centerText"><span>最新公告</span></div>
    </div>
    <div>
        <img src="~assets/img/profile/huodong.svg" alt="">
        <div class="centerText"><span>积分活动</span></div>
    </div>
    <div>
        <img src="~assets/img/profile/kefu.svg" alt="">
        <div class="centerText"><span>在线客服</span></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #center {
        width: 98%;
        font-size: 14px;
        border-radius: 10px;
        margin: 0 auto 8px;
        background-color: #fff;
        display: flex;
    }
    #center > div {
        flex: 1;
        text-align: center;
        padding-top: 8px;
        margin: auto 0;
    }
    #center img {
        background-color: var(--color-high-text);
        border-radius: 50%;
        padding: 8px;
        width: 36%;
        height: 36%;
    }
    #center .centerText {
        font-size: 12px;
        margin: 5px 0;
    }
</style>