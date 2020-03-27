<template>
  <div>
    <drop-down :isValue="isValue"/>
    
  </div>
</template>

<script>
import DropDown from '../../components/content/dropDown/DropDown'



export default {
    components: {
        DropDown,
        
    },
    data() {
        return {
            isValue: null
        }
    },
    created() {
        // 获取路由传过来的参数
        this.isValue = this.$route.params.value
    }
}
</script>

<style>

</style>