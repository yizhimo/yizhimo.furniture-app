import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

import { Form, Field, Button } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
import "lib-flexible/flexible"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
