<template>
    <div id="top-bar">
        <div class="top-left"><slot name="left"></slot></div>
        <div class="top-center"><slot name="center"></slot></div>
        <div class="top-right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#top-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 17px;
    color: #ffffff;
    background-color: var(--color-high-text);
    box-shadow: 0 0 2px 0 rgba(100, 100, 100, .1);
    z-index: 999;   
}

.top-left {
    width: 60px;
}

.top-center {
    flex: 1;
}

.top-right {
    width: 60px;
}
</style>