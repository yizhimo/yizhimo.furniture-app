<template>
  <div id="cart">
    <top-bar class="cartTop"><div slot="center">我的家具</div></top-bar>
    <div class="goodsBox" v-if="this.$store.state.goodsNum==1?true:false">
      <div class="leftBox">
        <img :src="this.$store.state.imgUrl" alt="">
      </div>
      <div class="rightBox">
        <div style="font-weight:bold;">{{this.$store.state.goodsName?this.$store.state.goodsName:'意式极简LM25超软羊毛真皮沙发'}}</div>
        <div>2020爆款，潮流，舒适</div>
        <div class="rightBottom">
          <div style="font-weight:bold;color:#ef8200;">{{this.$store.state.goodsMoney?this.$store.state.goodsMoney:'￥1688'}}</div>
          <div style="color:rgb(204,0,1);">×1</div>
        </div>
      </div>
    </div>
    <div class="bottom-menu">
      <span class="total-price">合计: {{this.$store.state.goodsMoney}}</span>
      <span class="buy-product" @click="buy">立即购买</span>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'

export default {
  components: {
    TopBar
  },
  methods: {
    buy() {
      this.$toast.show('购买成功', 2000)
    }
  }
}
</script>

<style scoped>
  #cart .cartTop {
    font-size: 14px;
  }
  .goodsBox {
    margin-top: 10px;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    display: flex;
    font-size: 14px;
  }
  .leftBox {
    width: 80px;
    height: 80px;
    margin-right: 16px;
  }
  .leftBox img {
    width: 100%;
    height: 100%;
  }
  .rightBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .rightBottom {
    display: flex;
    justify-content: space-between;
  }
  .bottom-menu {
    position: fixed;
    bottom: 48px;
    left: 0;
    right: 0;
    font-size: 14px;
    color: #888;
    line-height: 44px;
    display: flex;
    background-color: #fff;
  }

  .bottom-menu .total-price {
      margin-left: 15px;
      flex: 1;
      font-size: 16px;
      color: #666;
  }

  .bottom-menu .buy-product {
      background-color: #ef8200;
      color: #fff;
      width: 100px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      float: right;
  }
</style>