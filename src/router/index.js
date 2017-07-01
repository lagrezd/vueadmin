import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import page404 from '@/components/page404.vue'
import Dashboard from '@/components/Dashboard.vue'

import DashboardView from '@/components/Dashboard/DashboardView.vue'
import UserView from '@/components/Dashboard/UserView.vue'
import ProjectView from '@/components/Dashboard/ProjectView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      meta: { Auth: false },
      component: Login
    },
    {
      path: '/',
      meta: { Auth: true },
      component: Dashboard,
      children: [
        {
          path: '/',
          component: DashboardView
        },
        {
          path: ':id',
          component: ProjectView
        },
        {
          path: ':id/calltracking',
          component: UserView
        }
      ]
    },
    {
      path: '*',
      component: page404
    }
  ]
})
