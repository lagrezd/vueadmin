import * as types from '../mutations'

const state = {
  auth: false,
  currentUser: null,
  uid: ''
}

const getters = {
  getUser: state => state.currentUser,
  getAuth: state => state.auth,
  getUid: state => state.uid
}

const actions = {
  /* signUpWithPassword ({ commit, state, dispatch, rootState }, credential) {
    rootState.auth().createUserWithEmailAndPassword(credential.email, credential.password)
      .then((user) => {
        dispatch('signIn', user)
      })
      .catch((error) => {
        console.log(error)
        // let alert = errorAlert(error, 'Impossible to create account', 'error')
        dispatch('sendAlert', alert, { root: true })
      })
  }, */
  signInWithPassword ({ commit, state, dispatch, rootState }, credential) {
    // console.log(rootState)
    rootState.auth().signInWithEmailAndPassword(credential.email, credential.password)
      .then((user) => {
        dispatch('signIn', user)
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.')
        } else if (errorCode === 'auth/user-not-found') {
          alert('Wrong username.')
        } else {
          alert(errorMessage + '' + errorCode)
        }
        console.log('Erreur de connection à Firebase :' + error.message)
        // let alert = errorAlert(error, 'Impossible to sign in', 'error')
        // dispatch('sendAlert', alert, { root: true })
      })
  },
  signIn ({ commit, state, dispatch, rootState }, user) {
    // console.log('Commit avant:' + user)
    commit(types.SET_USER, user)
    // console.log('Commit apres:' + user)
    state.auth = user
    localStorage.setItem('user', JSON.stringify(user))
    // window.localStorage.setItem('token', token)
    // this.state.user = user
    // dispatch('sendAlert', alert, { root: true })
    // dispatch('setNotesPath', user.uid, {root: true})
    // dispatch('attachFirebaseListeners')
  },
  signOut ({ commit, state, dispatch, rootState }) {
    rootState.auth().signOut()
      .then(() => {
        commit(types.SET_USER, null)
        localStorage.removeItem('user')
        // let alert = successAlert('Signed out successfully', 'success')
        /* dispatch('sendAlert', alert, { root: true })
        dispatch('detachFirebaseListeners')
        dispatch('cleanUp') */
      })
      .catch((error) => {
        console.log(error)
        // let alert = successAlert('Signed out successfully', 'success')
        // dispatch('sendAlert', alert, { root: true })
      })
  }
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.currentUser = user
    state.auth = !!user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
