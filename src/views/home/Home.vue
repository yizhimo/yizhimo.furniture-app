<template>
  <div id="home">
    <start/>
    <top-bar class="homeTop" v-show="!this.$store.state.isGoHome">
      <div slot="center">家具购</div>
    </top-bar>
    <home-banner :banners="banners"></home-banner>
    <home-commend></home-commend>
  </div>
</template>

<script>
// 引入组件
import Start from './Start.vue'
import TopBar from 'components/common/topbar/TopBar.vue'
import HomeBanner from './childComps/HomeBanner.vue'
import HomeCommend from './childComps/HomeCommend.vue'

// 引入方法
import {getHomeBanner} from 'network/home.js'

export default {
  components: {
    Start,
    TopBar,
    HomeBanner,
    HomeCommend
  },
  data() {
    return {
      banners: []
    }
  },
  created() {
    this._getHomeBanner()
  },
  methods: {
    _getHomeBanner() {
      getHomeBanner().then(res => {
        // console.log(res)
        this.banners = res.data.banners
      })
    }
  }
}
</script>

<style>
  #home .homeTop {
    font-size: 14px;
  }
</style>