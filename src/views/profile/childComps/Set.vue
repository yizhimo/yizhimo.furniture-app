<template>
  <div id="set">
      <div class="setTop">
          <div>
              <img src="~assets/img/profile/youjian.svg" alt="">
              <span>我的消息</span>
          </div>
          <div>
              <img src="~assets/img/profile/dizhi.svg" alt="">
              <span>地址管理</span>
          </div>
          <div>
              <img src="~assets/img/profile/liwu.svg" alt="">
              <span>开通会员</span>
          </div>
      </div>
      <div class="setBottom">
          <div>
              <img src="~assets/img/profile/wode.svg" alt="">
              <span>关于我们</span>
          </div>
          <div>
              <img src="~assets/img/profile/shezhi.svg" alt="">
              <span>更多设置</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #set {
        width: 98%;
        background-color: #fff;
        margin: 15px auto 0;
        border-radius: 10px;
        font-size: 14px;
    }
    #set img {
        display: inline-block;
        vertical-align: bottom;
        margin-left: 6px;
        width: 7%;
        height: 7%;
    }
    #set span {
        display: inline-block;
        vertical-align: bottom;
        font-size: 14px;
        margin-left: 25px;
    }
    .setTop {
        padding: 4px 15px 10px 15px;
    }
    .setTop div, .setBottom div{
        padding: 10px 0 3px 0;   
        border-bottom: 1px solid rgb(240, 240, 240);
    }
    .setBottom {
        padding: 0 15px 20px 15px;
    }
</style>