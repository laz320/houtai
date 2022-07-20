import request from '@/utils/request'
export const getGoodsList = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'goods',
    params: {
      query, pagenum, pagesize
    }
  })
}
