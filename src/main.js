import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import api from './api'
// Vue.prototype.$api = api
import './libs/rem.js'
import { Row, Col, Lazyload, Tab, Tabs, Slider, Toast, Loading, Dialog, List, Field, Popup, Swipe, SwipeItem, Button } from 'vant'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(List)
Vue.use(Field).use(Slider)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Popup)
Vue.use(Lazyload)
Vue.use(Tab).use(Tabs)
Vue.use(Row).use(Col)
Vue.prototype.$toast = Toast
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
