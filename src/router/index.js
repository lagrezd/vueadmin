import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home.vue'
import page404 from '@/components/page404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta: { Auth: true },
      component: Home
    },
    {
      path: '/login',
      meta: { Auth: false },
      component: Login
    },
    {
      path: '*',
      component: page404
    }
  ]
})
