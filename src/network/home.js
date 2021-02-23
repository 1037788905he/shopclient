import { request, request1 } from './request';

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request(
    {
      url: '/home/data',
      params: {
        type,
        page
      }
    }
  )
}
export function getGoodlist() {
  return request1({
    url: '/home/goodslist'
  })
}