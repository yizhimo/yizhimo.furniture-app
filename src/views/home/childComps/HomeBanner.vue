<template>
    <div>
        <swiper>
            <swiper-item v-for="(item,index) in banners" :key="index">
                <img :src="item.img" alt="" class="bannerImg">
                <div>{{item.name}}</div>
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
    }
}
</script>

<style scoped>
    .bannerImg {
        width: 100%;
        height: 220px;
    }
</style>