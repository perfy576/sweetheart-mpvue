import SERVER from '@/config/server.js'
import cookies from 'weapp-cookie'

// 配置自定义别名
cookies.config({ requestAlias: 'requestx' })

let http = {}

http.call = function (url, params, method, callback) {
  url = SERVER.URL_PREFIX + url
  let body = null
  let header = null
  if (params) {
    body = params['body']
    header = params['header']
  }
  wx.requestWithCookie({
    url: url,
    data: body,
    method: method,
    header: header,
    success: function (res) {
      console.log('----- call: [', url, '] success')

      if (callback) {
        callback(res)
      } else {
        console.log('----- call: [', url, '], result: [', res, ']')
      }
    },
    fail: function (err) {
      console.log('----- call: [', url, '], err: [', err, ']')
    },
    complete: function () {
      // console.log('----- call: [', url, '] complete')
    }
  })
}

http.post = function (url, params, callback) {
  http.call(url, params, 'POST', callback)
}

export default http
