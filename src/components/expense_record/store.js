// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from '../../pages/record_team/node_modules/vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    needShowCreateBuyItem: false,
    needShowCreateReacordTeam: false,
    buyItems: [],
    buyRecords: [],
    recordTeams: []
  },
  mutations: {
    need_create_buy_item_true: (state) => {
      const obj = state
      obj.needShowCreateBuyItem = true
    },
    need_create_buy_item_false: (state) => {
      const obj = state
      obj.needShowCreateBuyItem = false
    },
    switch_show_create_record_team: (state, value) => {
      const obj = state
      obj.needShowCreateBuyItem = value
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
    },
    update_record_team: (state, recordTeams) => {
      console.log('-------update_record_team :', recordTeams)
      const obj = state
      obj.recordTeams = recordTeams
    }
  }
})

export default store
