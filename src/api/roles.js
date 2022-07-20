import request from '@/utils/request'
/**
 *角色列表
 * @returns
 */
export const getRoleList = () => {
  return request({
    url: 'roles'
  })
}
