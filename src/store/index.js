import Vue from 'vue'
import Vuex from 'vuex'
// import { firebaseAction } from 'vuexfire'

import Firebase from 'firebase'
import { config } from './firebaseConfig'
import * as types from './mutations'

import login from './modules/login'
// import Auth from './modules/auth'

Vue.use(Vuex)
Firebase.initializeApp(config)

let db = Firebase.database()
let auth = Firebase.auth
// let users = db.ref('clients')
// console.log(users)

export const store = new Vuex.Store({
  // strict: true,
  state: {
    db,
    auth,
    isLoggedIn: localStorage.getItem('token'),
    users: [],
    projects: []
  },
  mutations: {
    // ...firebaseMutations,
    [types.LOGIN] (state) {
      state.pending = true
    },
    [types.LOGIN_SUCCESS] (state) {
      state.isLoggedIn = true
      state.pending = false
    },
    [types.LOGOUT] (state) {
      state.isLoggedIn = false
    }
  },
  actions: {
    /* setClientsRef: firebaseAction(({ bindFirebaseRef }, users) => {
      bindFirebaseRef('users', users)
    }), */
    login ({ commit }, creds) {
      console.log('login...', creds)
      commit(types.LOGIN) // show spinner
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem('token', 'JWT')
          // localStorage.setItem('user', auth)
          commit(types.LOGIN_SUCCESS)
          resolve()
        }, 1000)
      })
    },
    logout ({ commit }) {
      localStorage.removeItem('user')
      commit(types.LOGOUT)
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  modules: {
    login
  }
})
