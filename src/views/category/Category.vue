<template>
  <div id="category">
    <top-bar class="categoryTop">
      <div slot="center">家具分类</div>
      <div slot="right"><img src="~assets/img/common/sousuo1.svg" alt=""></div>
    </top-bar>
    <tab-con :titles="titles"/>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'
import TabCon from 'components/content/tabCon/TabCon.vue'

export default {
  components: {
    TopBar,
    TabCon
  },
  data() {
    return {
      titles: ['空间', '风格', '品类']
    }
  }
}
</script>

<style>
  #category .categoryTop{
    background-color: #fff;
    color: #707070;
    font-size: 14px;
  }
  .categoryTop img {
    margin-top: 12px;
    width: 20px;
    height: 20px;
  }
</style>