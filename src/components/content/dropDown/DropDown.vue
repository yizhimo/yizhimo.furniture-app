<template>
    <div>
        <van-dropdown-menu active-color="#feaa48">
            <van-dropdown-item v-model="value1" :options="option1" @change="change1" :title-class="isColor1?'ddItem':''"/>
            <van-dropdown-item v-model="value2" :options="option2" @change="change2" :title-class="isColor2?'ddItem':''"/>
            <van-dropdown-item v-model="value3" :options="option3" @change="change3" :title-class="isColor3?'ddItem':''"/>
            <van-dropdown-item v-model="value4" :options="option4" @change="change4" :title-class="isColor4?'ddItem':''"/>
        </van-dropdown-menu>
        <div v-if="showGoods=='1a'|| showGoods=='2e'" class="box">
            <div v-for="(item, index) in jdmsList" :key="index" class="listBox">
                <div class="imgBox" @click="goDetail(item.id)">
                    <img :src="item.img" alt="">
                </div>
                <div class="textBox">
                    <div style="width: 100px;color:#ef8200;">{{item.name}}</div>
                    <div style="color:rgb(213,35,47);font-weight:bold;">￥{{item.price}}</div>
                </div>
            </div>
        </div>
        <div v-if="showGoods=='1b'|| showGoods=='2d'" class="box">
            <div v-for="(item, index) in qszyList" :key="index" class="listBox">
                <div class="imgBox" @click="goDetail(item.id)">
                    <img :src="item.img" alt="">
                </div>
                <div class="textBox">
                    <div style="width: 100px;color:#ef8200;">{{item.name}}</div>
                    <div style="color:rgb(213,35,47);font-weight:bold;">￥{{item.price}}</div>
                </div>
            </div>
        </div>
        <div v-if="showGoods=='1c'|| showGoods=='2c'" class="box">
            <div v-for="(item, index) in shofList" :key="index" class="listBox">
                <div class="imgBox" @click="goDetail(item.id)">
                    <img :src="item.img" alt="">
                </div>
                <div class="textBox">
                    <div style="width: 100px;color:#ef8200;">{{item.name}}</div>
                    <div style="color:rgb(213,35,47);font-weight:bold;">￥{{item.price}}</div>
                </div>
            </div>
        </div>
        <div v-if="showGoods=='1d'|| showGoods=='2a'" class="box">
            <div v-for="(item, index) in xctyList" :key="index" class="listBox">
                <div class="imgBox" @click="goDetail(item.id)">
                    <img :src="item.img" alt="">
                </div>
                <div class="textBox">
                    <div style="width: 100px;color:#ef8200;">{{item.name}}</div>
                    <div style="color:rgb(213,35,47);font-weight:bold;">￥{{item.price}}</div>
                </div>
            </div>
        </div>
        <div v-if="showGoods=='2b'" class="box">
            <div v-for="(item, index) in xctyList" :key="index" class="listBox">
                <div class="imgBox" @click="goDetail(item.id)">
                    <img :src="item.img" alt="">
                </div>
                <div class="textBox">
                    <div style="width: 100px;color:#ef8200;">{{item.name}}</div>
                    <div style="color:rgb(213,35,47);font-weight:bold;">￥{{item.price}}</div>
                </div>
            </div>
        </div>
        <div style="height:50px"></div>
    </div>
</template>

<script>

import {getJdmsGoods, getQszyGoods, getShofGoods, getXctyGoods, getXdjyGoods} from 'network/cateGoods.js'

export default {
    props: {
        isValue: {
            type: String,
            default() {
                return '1'
            }
        }
    },
    data() {
        return {
            itemId: null,
            jdmsList: null,
            qszyList: null,
            shofList: null,
            xctyList: null,
            xdjyList: null,
            showGoods: null,
            isColor1: false,
            isColor2: false,
            isColor3: false,
            isColor4: false,
            value1: '',
            value2: '2a',
            value3: '3a',
            value4: '4a',
            option1: [
                { text: '客厅', value: '1a' },
                { text: '卧室', value: '1b' },
                { text: '餐厅', value: '1c' },
                { text: '书房', value: '1d' }
            ],
            option2: [
                { text: '经典美式', value: '2a' },
                { text: '奢华欧法', value: '2b' },
                { text: '现代简约', value: '2c' },
                { text: '轻奢主义', value: '2d' },
                { text: '乡村田园', value: '2e' },
            ],
            option3: [
                { text: '默认排序', value: '3a' },
                { text: '销量排序', value: '3b' },
                { text: '人气排序', value: '3c' },
            ],
            option4: [
                { text: '价格', value: '4a' },
                { text: '从低到高', value: '4b' },
                { text: '从高到低', value: '4c' },
            ]
        }
    },
    methods: {
        // 进入详情
        goDetail(itemId) {
            console.log(itemId)
            this.itemId = itemId
            this.$router.push('/cateDetail'+this.itemId)
        },
    
        // 对应跳转文字变色
        change1(value) {
            // console.log(111)
            // 点击跳转不同内容
            if(value == '1a') {
                this.showGoods = '1a'
                getJdmsGoods().then(res => {
                    this.jdmsList = res.data.jdms
                })
            } else if(value == '1b') {
                this.showGoods = '1b'
                getQszyGoods().then(res => {
                    this.qszyList = res.data.qszy
                })
            } else if(value == '1c') {
                this.showGoods = '1c'
                getShofGoods().then(res => {
                    this.shofList = res.data.shof
                })
            } else if(value == '1d') {
                this.showGoods = '1d'
                getXctyGoods().then(res => {
                    this.xctyList = res.data.xcty
                })
            } else if(value == undefined){
                if(this.isValue == '1') {
                    this.showGoods = '1a'
                    getJdmsGoods().then(res => {
                        this.jdmsList = res.data.jdms
                    })
                } else if(this.isValue == '2') {
                    this.showGoods = '1b'
                    getQszyGoods().then(res => {
                        this.qszyList = res.data.qszy
                    })
                } else if(this.isValue == '3') {
                    this.showGoods = '1c'
                    getShofGoods().then(res => {
                        this.shofList = res.data.shof
                    })
                } else if(this.isValue == '4') {
                    this.showGoods = '1d'
                    getXctyGoods().then(res => {
                        this.xctyList = res.data.xcty
                    })
                }
            }
            this.isColor1 = true
        },
        change2(value) {
            if(value == '2a') {
                this.showGoods = '2a'
                getXctyGoods().then(res => {
                    this.xctyList = res.data.xcty
                })
            } else if(value == '2b') {
                this.showGoods = '2b'
                getXdjyGoods().then(res => {
                    this.xdjyList = res.data.xdjy
                })
            } else if(value == '2c') {
                this.showGoods = '2c'
                getShofGoods().then(res => {
                    this.shofList = res.data.shof
                })
            } else if(value == '2d') {
                this.showGoods = '2d'
                getQszyGoods().then(res => {
                    this.qszyList = res.data.qszy
                })
            } else if(value == '2e') {
                this.showGoods = '2e'
                getJdmsGoods().then(res => {
                    this.jdmsList = res.data.jdms
                })
            } else if(value == undefined){
                if(this.isValue == '1') {
                    this.showGoods = '1a'
                    getJdmsGoods().then(res => {    
                        this.jdmsList = res.data.jdms
                    })
                } else if(this.isValue == '2') {
                    this.showGoods = '1b'
                    getQszyGoods().then(res => {
                            this.qszyList = res.data.qszy
                    })
                } else if(this.isValue == '3') {
                    this.showGoods = '1c'
                    getShofGoods().then(res => {    
                        this.shofList = res.data.shof
                    })
                } else if(this.isValue == '4') {
                    this.showGoods = '1d'
                    getXctyGoods().then(res => {   
                        this.xctyList = res.data.xcty
                    })
                }
            }
            this.isColor2 = true
            
        },
        change3() {
            // console.log(333)
            this.isColor3 = true
        },
        change4() {
            // console.log(444)
            this.isColor4 = true
        }
    },
    created() {
        if(this.isValue == '1') {
            this.value1 = '1a'
            getJdmsGoods().then(res => {
                console.log(res)
                this.jdmsList = res.data.jdms
            })
        } else if(this.isValue == '2') {
            this.value1 = '1b'
            getQszyGoods().then(res => {
                console.log(res)
                this.qszyList = res.data.qszy
            })
        } else if(this.isValue == '3') {
            this.value1 = '1c'
            getShofGoods().then(res => {
                console.log(res)
                this.shofList = res.data.shof
            })
        } else if(this.isValue == '4'){
            this.value1 = '1d'
            getXctyGoods().then(res => {
                console.log(res)
                this.xctyList = res.data.xcty
            })
        }
        this.change1()
    }
}
</script>

<style>
    .van-dropdown-menu {
        height: 34px;
        font-size: 12px;
        /* padding-right: 20px; */
    }
    .van-dropdown-menu__item {
        margin-right: 15px;
    }
    .van-ellipsis {
        font-size: 12px;
    }
    .ddItem {
        color: #feaa48;
        font-size: 12px;
    }

    .box {
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 10px;
    }
    .listBox {
        width: 160px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 12px;
    }
    .imgBox {
        width: 140px;
        height: 80px;
    }
    .imgBox img {
        width: 100%;
        height: 100%;
    }
    .textBox {
        display: flex;
        justify-content: space-between;
    }
    .textBox div {
        align-items: center;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis; 
    }
</style>