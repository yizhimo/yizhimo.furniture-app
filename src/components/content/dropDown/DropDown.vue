<template>
    <div>
        <van-dropdown-menu active-color="#feaa48">
            <van-dropdown-item v-model="value1" :options="option1" @change="change1" :title-class="isColor1?'ddItem':''"/>
            <van-dropdown-item v-model="value2" :options="option2" @change="change2" :title-class="isColor2?'ddItem':''"/>
            <van-dropdown-item v-model="value3" :options="option3" @change="change3" :title-class="isColor3?'ddItem':''"/>
            <van-dropdown-item v-model="value4" :options="option4" @change="change4" :title-class="isColor4?'ddItem':''"/>
        </van-dropdown-menu>
        <div>{{showGoods}}</div>
    </div>
</template>

<script>
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
            showGoods: '',
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
        // 对应跳转文字变色
        change1(value) {
            // console.log(111)
            console.log(this.isValue, value)
            // 点击跳转不同内容
            if(value == '1a') {
                this.showGoods = '这是客厅'
            } else if(value == '1b') {
                this.showGoods = '这是卧室'
            } else if(value == '1c') {
                this.showGoods = '这是餐厅'
            } else if(value == '1d') {
                this.showGoods = '这是书房'
            } else if(value == undefined){
                if(this.isValue == '1') {
                    this.showGoods = '这是客厅'
                } else if(this.isValue == '2') {
                    this.showGoods = '这是卧室'
                } else if(this.isValue == '3') {
                    this.showGoods = '这是餐厅'
                } else if(this.isValue == '4') {
                    this.showGoods = '这是书房'
                }
            }
            this.isColor1 = true
        },
        change2() {
            // console.log(222)
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
        } else if(this.isValue == '2') {
            this.value1 = '1b'
        } else if(this.isValue == '3') {
            this.value1 = '1c'
        } else if(this.isValue == '4'){
            this.value1 = '1d'
        }
        // console.log(this.isValue)
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
</style>