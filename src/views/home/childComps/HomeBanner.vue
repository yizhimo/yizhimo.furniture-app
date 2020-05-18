<template>
    <div>
        <swiper >
            <swiper-item v-for="(item,index) in banners" :key="index" @click="inImage">
                <img :src="item.img" alt="" class="bannerImg">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
// 引入轮播组件
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        inImage() {
            // this.$router.push('/detail/'+this.goodsi.iid)
            this.$router.push('/detail/')
        }
    }
}
</script>

<style scoped>
    .bannerImg {
        width: 100%;
        height: 180px;
    }
</style>