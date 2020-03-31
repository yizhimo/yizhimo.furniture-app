<template>
  <div id="nextCategory">
    <top-bar class="nextCategoryTop">
        <div slot="left" @click="goBack">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="center">
            <van-search v-model="searchItem" 
                        shape="round"
                        show-action
                        placeholder="请输入关键词">
            <template #action>
                <div @click="onSearch">搜索</div>
            </template>
            </van-search>
        </div>
        <div slot="right" @click="goCart">
          <img src="~assets/img/common/gouwuche.svg" alt="">
        </div>
    </top-bar>
    <drop-down :isValue="isValue" class="dropDown"/>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'
import DropDown from '../../components/content/dropDown/DropDown'

export default {
    components: {
        TopBar,
        DropDown
    },
    data() {
        return {
            isValue: null,
            searchItem: ''
        }
    },
    methods: {
        goBack() {
            // 前往分类页并显示tabBar
            this.$store.state.isGoHome = false
            this.$router.replace('/category')
        },
        goCart() {
            // 前往购物车并显示tabBar
            this.$store.state.isGoHome = false
            this.$router.replace('/cart')
        },
        onSearch() {
            console.log('搜索')
        }
    },
    created() {
        // 获取路由传过来的参数
        this.isValue = this.$route.params.value
        // 隐藏tabBar
        this.$store.state.isGoHome = true
    }
}
</script>

<style>
    #nextCategory {
        height: 100vh;
        background-color: rgb(240, 240, 240);
    }
    #nextCategory .nextCategoryTop{
        background-color: #fff;
        color: #707070;
        font-size: 14px;
    }
    #nextCategory .nextCategoryTop .top-left {
        padding-right: 10px;
    }
    .nextCategoryTop img {
        margin-top: 6px;
        width: 22px;
        height: 22px;
    }
    #nextCategory .van-search {
        margin-top: 1px;
        padding: 0;
    }
    #nextCategory .van-cell, .van-search__action {
        font-size: 13px;
    }
    #nextCategory .van-search__content--round {
        height: 30px;
    }
    #nextCategory .van-search__action {
        margin-top: 2px;
        font-size: 14px;
    }
</style>