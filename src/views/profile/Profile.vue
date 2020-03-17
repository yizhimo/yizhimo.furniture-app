<template>
  <div id="profile">
    <top-bar class="profileTop"><div slot="center">个人资料</div></top-bar>
    <user></user>
    <center></center>
    <set></set>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'

import User from './childComps/User'
import Set from './childComps/Set'
import Center from './childComps/Center'

export default {
  components: {
    TopBar,
    User,
    Center,
    Set
  }
}
</script>

<style scoped>
  #profile {
    height: 100vh;
    background-color: rgb(240, 240, 240);
  }
  #profile .profileTop {
    background-color: #fff;
    color: #707070;
  }
</style>