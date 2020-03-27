import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 开屏
    isGoHome: true,
    // 注册,登录
    token: true,
    name: '',
    psw: ''
  },
  mutations: {
    // 进入首页
    goHome(state) {
      state.isGoHome = false
    },
    // 进行注册
    register(state, values) {
      console.log(state, values)
      state.name = values.用户名
      state.psw = values.密码
    }
  },
//   actions: {
//   },
//   modules: {
//   }
})
