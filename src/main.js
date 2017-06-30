// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.Auth && (!store.getters.getAuth)) {
    // console.log(to.meta.Auth)
    next({ path: '/login' })
  } else {
    console.log(store.state.getAuth)
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
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
