// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    needCreateBuyItem: false,
    buyItems: [],
    buyRecords: []
  },
  mutations: {
    need_create_buy_item_true: (state) => {
      const obj = state
      obj.needCreateBuyItem = true
    },
    need_create_buy_item_false: (state) => {
      const obj = state
      obj.needCreateBuyItem = false
    },
    update_buy_item: (state, item) => {
      console.log('-------update_buy_item :', item)
      const obj = state
      obj.buyItems = item
    },
    update_buy_record: (state, records) => {
      console.log('-------update_buy_record :', records)
      const obj = state
      obj.buyRecords = records
    }
  }
})

export default store
