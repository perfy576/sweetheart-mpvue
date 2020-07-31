import http from '@/components/common/http.js'
import SERVER from '@/config/server.js'
import cookies from 'weapp-cookie'

let wxLogin = {}

wxLogin.login = function () {
  // 获取 cookie
  let uid = cookies.get('uid')
  if (uid) {
    console.log('------- has login:', uid)
  } else {
    wx.login().then(res => {
      console.log('-----wx.login: ', res.code)
      // res_json = JSON.parse(res)
      let params = {}
      let body = {}
      body['wx_code'] = res.code
      params['body'] = body
      http.post(SERVER.WXMP.WX_LOGIN, params)
    }).catch(err => {
      console.log('-----wx.login err: ', err)
    })
  }
}

export default wxLogin
