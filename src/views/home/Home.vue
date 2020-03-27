<template>
  <div id="home">
    <start/>
    <top-bar class="homeTop" v-show="!this.$store.state.isGoHome">
      <div slot="center">家具购</div>
    </top-bar>
  </div>
</template>

<script>
import Start from './Start.vue'
import TopBar from 'components/common/topbar/TopBar.vue'

export default {
  components: {
    Start,
    TopBar
  }
}
</script>

<style>
  #home .homeTop {
    font-size: 14px;
  }
</style>