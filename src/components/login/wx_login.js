import http from '@/components/common/http.js'
import store from '@/components/login/store.js'
import SERVER from '@/config/server.js'
import cookies from 'weapp-cookie'

let wxLogin = {}

wxLogin.SESSION = {
  EXPIRE_SECOND: 60 * 10 - 10
}

wxLogin.do_after_login = function (func) {
  console.log("------ do_after_login ", func)
  if (wxLogin.check_need_login() === false) {
    if (store.state.login_in_process === false) {
      console.log("----- do func after login")
      wxLogin.login(func)
    } else {
      store.commit("add_do_after_login_callback", func)
    }
  } else {
    console.log("----- dreict do func")
    func()
  }
}

wxLogin.check_need_login = function () {
  let uid = cookies.get('uid')
  let check_field = cookies.get('check_field')
  let login_info = cookies.get('login_info')
  let session = cookies.get('session')
  let login_type = cookies.get('login_type')
  let expire_time = cookies.get('expire_time')

  if (uid === null || check_field === null || login_info === null || session === null || login_type === null || expire_time === null) {
    console.log("-------- uid", uid)
    console.log("-------- check_field", check_field)
    console.log("-------- login_info", login_info)
    console.log("-------- session", session)
    console.log("-------- login_type", login_type)
    console.log("-------- expire_time", expire_time)

    console.log('check_need_login field null')
    return false
  }
  if (!wxLogin.check_session_expire_time(expire_time)) {
    console.log('check_need_login expire error')
    return false
  }
  return true
}

wxLogin.check_session_expire_time = function (expire_time) {
  if (expire_time == null) {
    return false
  }
  expire_time = expire_time.substring(0, 19)
  let expire_time_timestamp = new Date(expire_time).getTime() / 1000

  let cur_time_timestamp = new Date().getTime() / 1000
  let diff = expire_time_timestamp - cur_time_timestamp
  if (diff < 0) {
    console.log('check_session_expire_time: ', expire_time_timestamp, "-", cur_time_timestamp, "=", diff)
    return false
  } else {
    console.log('check_session_expire_time succ: ', diff)
    return true
  }
}

wxLogin.login = function (func) {
  console.log('wx login start')
  if (!wxLogin.check_need_login() && !store.state.login_in_process) {
    store.commit("start_login")
    if (func) {
      store.commit("add_do_after_login_callback", func)
    }
    console.log('wx login start 1')
    wx.login().then(res => {
      let params = {}
      let body = {}
      body['wx_code'] = res.code
      params['body'] = body
      http.post(SERVER.WXMP.WX_LOGIN, params, (res) => {
        console.log("----- wxLogin.login succ")
        store.commit("login_succ")
      })
    }).catch(err => {
      console.log('-----wx.login err: ', err)
    })
  } else {
    if (func) {
      func()
    }
  }
}

export default wxLogin
