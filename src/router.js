import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./page/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./page/About.vue')
    }
  ]
})
