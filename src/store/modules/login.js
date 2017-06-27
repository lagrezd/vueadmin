import * as types from '../mutations'

const state = {
  auth: false,
  currentUser: null,
  uid: ''
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
    rootState.auth().signInWithEmailAndPassword(credential.email, credential.password)
      .then((user) => {
        dispatch('signIn', user)
      })
      .catch((error) => {
        console.log(error)
        // let alert = errorAlert(error, 'Impossible to sign in', 'error')
        dispatch('sendAlert', alert, { root: true })
      })
  },
  signIn ({ commit, state, dispatch, rootState }, user) {
    commit(types.SET_USER, user)
    dispatch('sendAlert', alert, { root: true })
    dispatch('setNotesPath', user.uid, {root: true})
    dispatch('attachFirebaseListeners')
  } /*,
  signOut ({ commit, state, dispatch, rootState }) {
    rootState.auth().signOut()
      .then(() => {
        commit(types.SET_USER, null)
        // let alert = successAlert('Signed out successfully', 'success')
        dispatch('sendAlert', alert, { root: true })
        dispatch('detachFirebaseListeners')
        dispatch('cleanUp')
      })
      .catch((error) => {
        console.log(error)
        // let alert = successAlert('Signed out successfully', 'success')
        dispatch('sendAlert', alert, { root: true })
      })
  } */
}

const getters = {
  getUser: state => state.currentUser,
  getAuth: state => state.auth,
  getUid: state => state.uid
}

export default {
  state,
  getters,
  actions /* ,
  mutations */
}