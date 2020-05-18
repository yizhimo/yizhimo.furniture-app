<template>
  <div class="itemBox">
    <div class="item" v-for="(item, index) in des" :key="index">
      <div><img :src="item.img" alt=""></div>
      <div class="itemName">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      des: [{name:"沙发",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-06-12/new15603197279158.jpeg"}, 
      {name:"休闲椅",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-06-14/new15604914822591.jpeg"}, 
      {name:"茶几",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-05-05/new15886676031018.jpeg"}, 
      {name:"电视柜",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-24/new15876951634513.jpeg"}, 
      {name:"餐桌",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-30/new15882317931478.jpeg"}, 
      {name:"酒柜",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-05-18/new15581636285965.png"}, 
      {name:"餐椅",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-28/new15880552994327.png"}, 
      {name:"睡床",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-05-19/new15582450796331.jpeg"}, 
      {name:"床柜",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/big_img/154832313084520.jpeg"}, 
      {name:"柜子",img:"http://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-05-21/new15584189038810.jpeg"}, 
      {name:"妆台",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2019-09-24/new15693117998774.jpeg"}, 
      {name:"书桌",img:"https://jiajudashi.oss-cn-shenzhen.aliyuncs.com/images/major_img/2020-04-30/new15882171956894.jpeg"}]
    }
  }
}
</script>

<style scoped>
  .itemBox {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .item {
    width: 90px;
    font-size: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* background-color: #ffffff; */
    margin: 6px;
    padding: 6px 0;
  }
  .item img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .itemName {
    margin-top: 6px;
  }
</style>