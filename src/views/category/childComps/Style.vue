<template>
  <div id="style">
    <div>
      <img src="~assets/img/category/meishi.png" alt="">
      <div class="styleRight">
        <span>经典美式</span>
        <span>— 美式,纯正经典 —</span>
      </div>
    </div>
    <div>
      <img src="~assets/img/category/oufa.png" alt="">
      <div class="styleRight">
        <span>奢华欧法</span>
        <span>— 欧法,高贵奢华 —</span>
      </div>
    </div>
    <div>
      <img src="~assets/img/category/jianyue.png" alt="">
      <div class="styleRight">
        <span>现代简约</span>
        <span>— 现代,极简时尚 —</span>
      </div>
    </div>
    <div>
      <img src="~assets/img/category/qingshe.png" alt="">
      <div class="styleRight">
        <span>轻奢主义</span>
        <span>— 轻奢,时尚臻品 —</span>
      </div>
    </div>
    <div>
      <img src="~assets/img/category/tianyuan.png" alt="">
      <div class="styleRight">
        <span>乡村田园</span>
        <span>— 田园,朴素自然 —</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #style {
    margin: 10px auto;
  }
  #style > div {
    width: 90%;
    height: 13vh;
    margin: 8px auto 0;
    background-color: #fff;
    border: 1px solid #b4b4b4;
    display: flex;
  }
  #style img {
    width: 45%;
    margin-left: 4px;
    padding: 6px;
    flex: 6;
  }
  #style .styleRight {
    flex: 4;
    text-align: center;
    background-color: #c9c9c9;
    padding-top: 25px;
  }
  #style span {
    display: block;
  }
  #style span:first-child {
    font-size: 14px;
    font-weight: 700;
  }
  #style span:last-child {
    margin-top: 3px;
    font-size: 6px;
  }
</style>