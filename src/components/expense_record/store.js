// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    need_show_create_buy_item: false,
    need_show_create_reacord_team: false,
    buy_items: [],
    buy_records: [],
    record_team: [],
    record_team_detial: {},
    record_team_approval: {}
  },
  mutations: {
    need_create_buy_item_true: (state) => {
      state.need_show_create_buy_item = true
    },
    need_create_buy_item_false: (state) => {
      state.need_show_create_buy_item = false
    },
    switch_show_create_record_team: (state, value) => {
      state.need_show_create_reacord_team = value
    },
    update_buy_item: (state, item) => {
      console.log('-------update_buy_item :', item)
      state.buy_items = item
    },
    update_buy_record: (state, records) => {
      console.log('-------update_buy_record :', records)
      state.buy_records = records
    },
    update_record_team: (state, record_team) => {
      console.log('-------update_record_team :', record_team)
      state.record_team = record_team
    },
    update_record_team_detail: (state, record_team_detial) => {
      console.log('-------record_team_detial:', record_team_detial)
      if (record_team_detial && record_team_detial.team_manage && record_team_detial.team_manage[0]) {
        state.record_team_detial[record_team_detial.team_manage[0].team_id] = record_team_detial
      }
    },
    update_record_team_approval: (state, record_team_approval) => {
      console.log('-------update_record_team_approval :', record_team_approval)
      state.record_team_approval = record_team_approval
    }
  }
})

export default store
