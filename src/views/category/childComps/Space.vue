<template>
  <div id="space">
    <div>
        <div class="spaceItems">
            <div>客厅</div>
            <span>LIVING ROOM</span>
        </div>
        <img src="~assets/img/category/keting.png" alt="">
    </div>
    <div>
        <div class="spaceItems">
            <div>卧室</div>
            <span>BEDROOM</span>
        </div>
        <img src="~assets/img/category/woshi.png" alt="">
    </div>
    <div>
        <div class="spaceItems">
            <div>餐厅</div>
            <span>RESTAURANT</span>
        </div>
        <img src="~assets/img/category/canting.png" alt="">
    </div>
    <div>
        <div class="spaceItems">
            <div>书房</div>
            <span>STUDY</span>
        </div>
        <img src="~assets/img/category/shufang.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #space {
        margin: 10px auto;
        /* height: 70vh; */
    }
    #space > div {
        width: 96%;
        height: 17vh;
        margin: 8px auto 0;
        display: flex;
        background-color: #fff;
        border: 1px solid #b4b4b4;
    }
    #space .spaceItems {
        flex: 4;
        text-align: center;
        font-size: 18px;
        margin: auto 0;
    }
    #space .spaceItems div {
        margin-bottom: -6px;
        font-weight: 700;
    }
    #space span {
        font-size: 8px;
    }
    #space img {
        flex: 6;
        width: 65%;
    }
</style>