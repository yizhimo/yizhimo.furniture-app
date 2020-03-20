<template>
  <div id="tab-con">
      <div class="tab-con-item" 
           v-for="(item,index) in titles" :key="index"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0   
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            // this.$emit('tabClick', index)
        }
    }
}
</script>

<style>
    #tab-con {
        display: flex;
        text-align: center;
        font-size: 13px;
        height: 40px;
        line-height: 54px;
        text-align: 40px;
        background-color: #ffffff;
        border-bottom: 1px solid rgb(240, 240, 240);
        z-index: 10;
    }
    .tab-con-item {
        flex: 1;
    }
    .tab-con-item span {
        padding: 4px;
    }
    .active {
        color: var(--color-high-text);
    }
    .active span {
        border-bottom: 2px solid var(--color-high-text);
    }
</style>