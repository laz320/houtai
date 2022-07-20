import { getRightsList } from '@/api/rights'
const state = {
  rightList: []
}
const mutations = {
  getRightsList (state, payload) {
    state.rightList = payload
  }
}
const actions = {
  async getRightsList (context, data) {
    const res = await getRightsList(data)
    // console.log(res)
    res.data.data.forEach((item, index) => {
      item.index = index + 1
    })
    context.commit('getRightsList', res.data.data)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}
