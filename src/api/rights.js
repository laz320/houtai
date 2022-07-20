import request from '@/utils/request'
export const getRightsList = (type) => {
  return request({
    url: `rights/${type}`
  })
}
