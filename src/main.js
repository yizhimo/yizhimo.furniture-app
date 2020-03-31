import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast/index'
//安装toast插件
//安装好后,就会调用toast里install方法
Vue.use(toast)

import { Form, Field, Button, DropdownMenu, DropdownItem, Search } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Search);
import "lib-flexible/flexible"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
