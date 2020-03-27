<template>
  <div id="cart">
    <top-bar class="cartTop"><div slot="center">我的家具</div></top-bar>
  </div>
</template>

<script>
import TopBar from 'components/common/topbar/TopBar.vue'

export default {
  components: {
    TopBar
  }
}
</script>

<style>
  #cart .cartTop {
    font-size: 14px;
  }
</style>