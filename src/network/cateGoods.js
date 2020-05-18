import request from './axios'

export function getJdmsGoods() {
    return request({
      url: '/public/cateGoods/jdms.json'
    })
}
export function getQszyGoods() {
  return request({
    url: '/public/cateGoods/qszy.json'
  })
}
export function getShofGoods() {
  return request({
    url: '/public/cateGoods/shof.json'
  })
}
export function getXctyGoods() {
  return request({
    url: '/public/cateGoods/xcty.json'
  })
}
export function getXdjyGoods() {
  return request({
    url: '/public/cateGoods/xdjy.json'
  })
}
export function getGoods() {
  return request({
    url: '/public/cateGoods/goods.json'
  })
}