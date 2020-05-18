<template>
  <div id="app">
    <keep-alive exclude=" CateDetail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-show="!this.$store.state.isGoHome"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>
