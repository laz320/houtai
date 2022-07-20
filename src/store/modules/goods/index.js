import { getGoodsList } from '@/api/goods'
const state = {
  // 3 把数据放到states中，初始化空数组
  goodsList: [],
  total: []
}
const mutations = {
  // 4 声明方法 把传回来的数据放入空数组中
  getGoodsList (state, payload) {
    // state.goodsList = payload
    state.goodsList = payload.goods
    state.total = payload.total
  }
}
const actions = {
  // 1封装ajax
  async getGoodsList (context, data) {
    const res = await getGoodsList(data)
    console.log(res)
    // 因为拿过来的数据没有index,无法做排序，则需自己添加index
    // 在遍历数据的同时 res.data.data.goods是个对象 则给对象添加属性需要  item.属性名=属性值
    res.data.data.goods.forEach((item, index) => {
      item.index = index + 1
    })
    // context.commit('getGoodsList', res.data.data.goods)
    // 5 调用getGoodsList 把数据传给getGoodsList()  res.data.data=payload
    context.commit('getGoodsList', res.data.data)
  }
}
export default {
  // 开启命名空间
  namespaced: true,
  state,
  mutations,
  actions
}
