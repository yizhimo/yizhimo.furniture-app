import request from './axios'

export function getHomeBanner() {
    return request({
      url: '/public/home/banner.json'
    })
}