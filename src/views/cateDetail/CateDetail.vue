<template>
<div>
  <div id="box" v-if="detailList">
        <div class="back" @click="backClick">返回</div>
        <div class="imgBox">
            <img :src="detailList[0].img" alt="">
        </div>
        <div class="base-info">
            <div class="info-title">
               {{detailList[0].name}}
            </div>
            <div class="info-price">
                <span class="n-price">{{detailList[0].price}}</span>
                <span class="o-price">¥1988.00</span>
                <span class="discount">促销价</span>
            </div>
            <div class="info-other">
                <span>销量 3887</span>
                <span>收藏76人</span>
                <span>24小时内发货</span>
            </div>
        </div>
        <div class="btnBox">
            <div class="leftBox">
                <div class="leftItem">
                    <div><img src="~assets/img/profile/wode.svg" alt=""></div>
                    <div>客服</div>
                </div>
                <div class="leftItem">
                    <div><img src="~assets/img/profile/dizhi.svg" alt=""></div>
                    <div>店铺</div>
                </div>
                <div class="leftItem">
                    <div><img src="~assets/img/profile/liwu.svg" alt=""></div>
                    <div>收藏</div>
                </div>
            </div>
            <div class="right1" @click="addCart">加入购物车</div>
            <div class="right2">立即购买</div>
        </div>
  </div>
</div>
</template>

<script>
import {getJdmsGoods, getQszyGoods, getShofGoods, getXctyGoods, getXdjyGoods, getGoods} from 'network/cateGoods.js'
export default {
    name: "CateDetail",
    components: {
        
    },
    data() {
        return {
            isId: null,
            detailList: null
        }
    },
    created (){
        // 获取路由传过来的参数
        console.log(this.$route.params.id)
        this.isId = this.$route.params.id
        console.log(this.isId)
        getGoods().then(res => {
           const detailList = res.data.goods.filter(item => item.id == this.isId)
           this.detailList = detailList
        //    console.log(this.detailList)
        //    console.log(res)
        })
    },
    watch: {
        "$route.path": function(newVal,oldVal) {
            console.log(newVal,oldVal)
            if(newVal.indexOf("cateDetail") != -1) {
                console.log(this.$route.params.id)
                this.isId = this.$route.params.id
                console.log(this.isId)
                getGoods().then(res => {
                    const detailList = res.data.goods.filter(item => item.id == this.isId)
                    this.detailList = detailList
                    //    console.log(this.detailList)
                    //    console.log(res)
                })
            }
        }
    },
    methods: {
        backClick() {
            this.$router.push('/Category')
        },
        addCart() {
            // 1.创建对象
            const obj = {}
            // 2.对象信息
            obj.goodsName = this.detailList[0].name
            obj.imgUrl = this.detailList[0].img,
            obj.goodsNum = 1
            obj.goodsMoney = this.detailList[0].price
            // 3.添加到Store中
            //调用自己封装的toast组件方法
            this.$toast.show('添加成功', 2000)
            this.$store.commit('addGoods', obj) 
            this.$router.replace('/cart')
            console.log(obj)
        }
    }
}
</script>

<style scoped>
    .back {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
        font-size: 14px;
        background-color: #fff;
    }
    .imgBox {
        width: 100%;
        height: 400px;
    }
    .imgBox img {
        width: 100%;
        height: 100%;
    }

    .btnBox {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 50px;
        display: flex;
        background-color: #fff;
        z-index: 999;
    }
    .leftBox {
        flex: 2;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #feaa48;
    }
    .leftItem {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .leftItem img {
        width: 20px;
        height: 20px;
    }
    .right1, .right2 {
        flex: 1;
        line-height: 50px;
        font-size: 12px;
        text-align: center;
        background-color: #feaa48;
        color: #fff;
    }
    .right1 {
        color: #feaa48;
        background-color: #fff;
        border: 1px solid #feaa48;
    }
    .base-info {
        background-color: #fff;
        padding: 15px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }

    .info-title {
        color: #222;
        font-size: 14px;
    }

    .info-price {
        margin-top: 10px;
    }

    .info-price .n-price {
        font-size: 24px;
        color: var(--color-high-text);
    }

    .info-price .o-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
    }

    .info-price .discount {
        font-size: 12px;
        padding: 2px 5px;
        color: #fff;
        background-color: var(--color-high-text);
        border-radius: 8px;
        margin-left: 5px;

        /*让元素上浮一些: 使用相对定位即可*/
        position: relative;
        top: -4px;
    }

    .info-other {
        margin-top: 15px;
        line-height: 30px;
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid rgba(100,100,100,.1);
        justify-content: space-between;
    }

    .info-service {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }

    .info-service-item img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }

    .info-service-item span {
        font-size: 13px;
        color: #333;
    }
</style>