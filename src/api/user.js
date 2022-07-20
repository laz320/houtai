import request from '@/utils/request'
// 封装
/**
 *登录
 * @param {*} param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'login',
    data: {
      password,
      username
    }
  })
}

/**
 *用户数据列表
 * @query查询参数可以为空
          pagenum当前页码不能为空
          pagesize每页z显示条数不能为空
 * @returns
 */
export const getUserList = ({ query, pagenum = 1, pagesize = 10 }) => {
  return request({
    url: 'users',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}

/**
 *修改用户状态
 * @param {用户 ID} uId
 * @param {用户状态} type
 * @returns
 */
export const updateState = (uId, type) => {
  return request({
    method: 'PUT',
    url: `users/${uId}/state/${type}`
  })
}

/**
 *添加用户
 * @param {*} param0
 * @returns
 */
export const addUsers = ({ username, password, email, mobile }) => {
  return request({
    method: 'POST',
    url: 'users',
    data: {
      username,
      password,
      email,
      mobile
    }
  })
}

/**
 *删除用户
 * @param {*} id
 * @returns
 */
export const deleteUser = (id) => {
  return request({
    method: 'DELETE',
    url: `users/${id}`
  })
}

/**
 *分配角色
 * @param {*} param0
 * @returns
 */
export const assignRolesList = ({ id, rid }) => {
  return request({
    method: 'PUT',
    url: `users/${id}/role`,
    params: {
      id,
      rid
    }
  })
}

/**
 *编辑用户提交
 * @param {*} param0
 * @returns
 */
// export const getEdituserList = ({ id, email, mobile }) => {
//   return request({
//     method: 'PUT',
//     url: `users/${id}`,
//     params: {
//       id,
//       email,
//       mobile
//     }
//   })
// }
