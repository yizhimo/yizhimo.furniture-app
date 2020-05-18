<template>
  <div>
    <div class="homeBox" style="margin-top:6px;">
      <div class="head" style="color:#ef8200;">新品上新</div>
      <div class="title">第一手创新设计</div>
      <div class="itemBox">
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-23/new15876356639396.gif" alt="">
          <div style="margin: 10px 0;font-size:13px;">美式极简</div>
          <div style="color:#ef8200;">￥1836.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-23/new15876342869270.gif" alt="">
          <div style="margin: 10px 0;font-size:13px;">英格兰风</div>
          <div style="color:#ef8200;">￥1999.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-23/new15876352162446.gif" alt="">
          <div style="margin: 10px 0;font-size:13px;">实用主义</div>
          <div style="color:#ef8200;">￥1520.00</div>
        </div>
      </div>
    </div>
    <div class="homeBox">
      <div class="head" style="color:rgb(213,35,47)">火热销售</div>
      <div class="title">每天抢到爆的爆款</div>
      <div class="itemBox">
        <div class="item" @click="inImage">
          <img src="http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-06-15/new15605807652793.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">真皮沙发</div>
          <div style="color:#ef8200;">￥998.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-23/new15876494789532.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">电视机柜</div>
          <div style="color:#ef8200;">￥566.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-28/new15880420789180.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">羊绒沙发</div>
          <div style="color:#ef8200;">￥888.00</div>
        </div>
      </div>
    </div>
    <div class="homeBox">
      <div class="head" style="color:rgb(44,116,244)">特价促销</div>
      <div class="title">天天都是双11</div>
      <div class="itemBox">
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-15/new15869508186649.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">圆木角桌</div>
          <div style="color:#ef8200;">￥233.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-22/new15875383427723.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">钛金茶几</div>
          <div style="color:#ef8200;">￥688.00</div>
        </div>
        <div class="item" @click="inImage">
          <img src="http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/big_img/154829790436831.jpeg" alt="">
          <div style="margin: 10px 0;font-size:13px;">超软沙发</div>
          <div style="color:#ef8200;">￥299.00</div>
        </div>
      </div>
    </div>
    <div style="margin-bottom:20px;height:40px;"></div>
  </div>
</template>

<script>
export default {
  methods: {
    inImage() {
      // this.$router.push('/detail/'+this.goodsi.iid)
      this.$router.push('/detail/')
    }
  }
}
</script>

<style scoped>
  .homeBox {
    width: 96%;
    margin: 10px auto 0;
    padding: 16px 12px;
    background-color: #fff;
  }
  .head {
    font-size: 16px;
    font-weight: bold;
  }
  .title {
    margin: 12px 0;
    font-size: 14px;
  }
  .itemBox {
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item img {
    width: 80px;
    height: 80px;
  }
</style>