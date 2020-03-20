<template>
  <div id="tab-bar-item" @click="btnClick">
      <!-- <img src="../../assets/img/tabbar/shouye.svg" alt="">
      <div>首页</div> -->
      <!-- 不能写死，动态获取，使用插槽 -->
      <div class="item-active-icon" v-if="isActive"><slot name="item-img-b"></slot></div>
      <div class="item-icon" v-else><slot name="item-img"></slot></div>
      <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    props: {
        path: String,
        activeColor: {
            type: String,
            default: '#feaa48',
        }
    },
    methods: {
        btnClick() {
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive() {
            // return this.$route.path.indexOf(this.path) !== -1
            return this.$route.path === this.path 
        },
        activeStyle() {
            return this.isActive ? {color: this.activeColor} : {}
        }
    }
}
</script>

<style>

    #tab-bar-item {
        flex: 1;
    }

    .item-icon img,.item-active-icon img {
        width: 22px;
        height: 22px;
        margin-top: 6px;
        /* 清除img标签下的预留 */
        vertical-align: middle;
    }

    .item-text {
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
        color: #707070;
    }
</style>