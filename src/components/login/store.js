// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    do_after_login: [],
    do_after_login_2: [],
    login_in_process: false,
    doing_callback: false
  },
  mutations: {
    start_login: (state) => {
      state.login_in_process = true
      console.log("----- start_login")
    },
    add_do_after_login_callback: (state, func) => {
      if (state.login_in_process) {
        console.log("----- add_do_after_login_callback push")
        state.do_after_login.push(func)
      } else {
        console.log("----- add_do_after_login_callback direct")
        func()
      }
    },
    login_succ: (state) => {
      state.login_in_process = false
      for (let i in state.do_after_login) {
        state.do_after_login[i]()
      }
    }
  }
})

export default store
