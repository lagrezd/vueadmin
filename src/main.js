// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import { sync } from 'vuex-router-sync'
import App from './App'
import { store } from './store'
import Materials from 'vue-materials'

Vue.use(Materials)
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.Auth)) {
    // console.log(record.meta.Auth)
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!to.meta.Auth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next() // make sure to always call next()!
    }
  } else {
    next() // make sure to always call next()!
  }
})

// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localUser = JSON.parse(localUserString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
    // store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

