const getter = {
  // 6 在getters中做映射
  userList: state => state.users.userList,
  total: state => state.users.total,
  rightList: state => state.rights.rightList,
  goodsList: state => state.goods.goodsList,
  total1: state => state.goods.total
}

export default getter
