// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired && !store.getters.getAuth) {
    console.log(to.meta.Auth)
    console.log(to.meta.Auth)
    next({ path: '/login' })
  } else {
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
