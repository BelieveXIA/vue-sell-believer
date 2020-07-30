import axios from 'axios'

const ERRNO_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERRNO_OK && data) {
        return data
      }
    }).catch(() => {
      console.log('获取数据失败')
    })
  }
}
