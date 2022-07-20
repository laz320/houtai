const state = {
  token: ''
}
const mutations = {
  setUser (state, payload) {
    state.token = payload
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
