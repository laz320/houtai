import { getUserList } from '@/api/user'

// 采用模块化管理里的方式，建立一个专门的模块来管理
const state = {
  // 把数据放在state里
  userList: [],
  total: null
}
const mutations = {
  updateUserList (state, payload) {
    state.userList = payload.users
    state.total = payload.total
  }
}
const actions = {
  async getUserList (context, data) {
    const res = await getUserList(data)
    console.log(res)
    context.commit('updateUserList', res.data.data)
    res.data.data.users.forEach((item, index) => {
      item.index = index + 1
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
