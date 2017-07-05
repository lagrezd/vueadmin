import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import page404 from '@/components/page404.vue'
import Dashboard from '@/components/Dashboard.vue'

import DashboardView from '@/components/Dashboard/DashboardView.vue'
import UsersView from '@/components/Dashboard/UsersView.vue'
import UserView from '@/components/Dashboard/UserView.vue'
import ProjectView from '@/components/Dashboard/ProjectView.vue'
import ProjectCallTrackingView from '@/components/Dashboard/ProjectCallTrackingView.vue'
import SettingsView from '@/components/Dashboard/SettingsView.vue'

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
          meta: { Auth: true },
          component: DashboardView
        },
        {
          path: 'settings',
          component: SettingsView,
          meta: { Auth: true }
        },
        {
          path: 'users',
          component: UsersView,
          meta: { Auth: true }
        },
        {
          path: '/user/:id',
          component: UserView,
          meta: { Auth: true }
        },
        {
          path: '/project/:id',
          meta: { Auth: true },
          component: ProjectView
        },
        {
          path: '/project/:id/calltracking',
          meta: { Auth: true },
          component: ProjectCallTrackingView
        }
      ]
    },
    {
      path: '*',
      meta: { Auth: false },
      component: page404
    }
  ]
})
