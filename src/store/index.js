import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: true,
    name: '',
    psw: ''
  },
  mutations: {
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
