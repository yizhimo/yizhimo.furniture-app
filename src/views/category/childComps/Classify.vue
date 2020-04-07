<template>
  <div id="classify">
    <van-grid :gutter="10">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #classify {
    margin-top: 10px;
  }
</style>