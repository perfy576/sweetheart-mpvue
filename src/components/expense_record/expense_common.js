import store from './store'
import http from '@/components/common/http.js'
import SERVER from './server.js'

let expense_common = {}

expense_common.post_query_buy_item = function () {
  console.log('-------expense_common.post_query_buy_item ')
  http.post(SERVER.EXPECSE_RECORD.QUERY_BUY_ITEM, null, expense_common.call_back_query_buy_item.bind(this))
}
expense_common.call_back_query_buy_item = function (res) {
  console.log('-------expense_common.call_back_query_buy_item: ', res)
  let newItem = {}
  let item = []
  newItem.name = '新建消费项归类'
  newItem.item_id = -1
  newItem.item_memo = '新建'
  item.push(newItem)
  if (res && res.data) {
    if (res.data.result === 0) {
      let itemsArr = res.data.res_info.items
      console.log('---- call_back_query_buy_item:', itemsArr)
      for (let i in itemsArr) {
        let tmp = {}
        tmp.name = itemsArr[i].item
        tmp.item_id = itemsArr[i].item_id
        tmp.item_memo = itemsArr[i].item_memo
        item.push(tmp)
      }
    }
  }
  store.commit('update_buy_item', item)
}

expense_common.post_query_buy_record = function () {
  http.post(SERVER.EXPECSE_RECORD.QUERY_BUY_RECORD, null, expense_common.call_back_query_buy_record)
}

expense_common.call_back_query_buy_record = function (res) {
  if (res && res.data) {
    if (res.data.result === 0) {
      store.commit('update_buy_record', res.data.res_info)
    }
  }
}

expense_common.post_query_record_team = function () {
  http.post(SERVER.EXPECSE_RECORD.QUERY_RECORD_TEAM, null, expense_common.call_back_query_record_team)
}

expense_common.call_back_query_record_team = function (res) {
  console.log('-------expense_common.call_back_query_buy_item ')
  let newRecordTeam = {}
  let record_team = []
  newRecordTeam.name = '默认'
  newRecordTeam.team = '默认'
  newRecordTeam.team_id = 0
  newRecordTeam.team_memo = '私有'
  record_team.push(newRecordTeam)
  if (res && res.data) {
    if (res.data.result === 0) {
      let record_teamArr = res.data.res_info
      for (let i in record_teamArr) {
        let tmp = {}
        tmp.team = record_teamArr[i].team
        tmp.team_id = record_teamArr[i].team_id
        tmp.team_memo = record_teamArr[i].team_memo
        tmp.auth_type = record_teamArr[i].auth_type
        tmp.share_state = record_teamArr[i].share_state
        record_team.push(tmp)
      }
    }
  }
  store.commit('update_record_team', record_team)
}

expense_common.post_query_record_team_manage = function (params, call_back) {
  if (call_back == null) {
    call_back = expense_common.call_back_query_record_team_manage
  }
  http.post(SERVER.EXPECSE_RECORD.QUERY_RECORD_TEAM_DETIAL, params, call_back)
}

expense_common.call_back_query_record_team_manage = function (res) {
  console.log('-------call_back_query_record_team_manage', res)
  if (res && res.data) {
    if (res.data.result === 0) {
      let record_team_detial = res.data.res_info
      store.commit('update_record_team_detail', record_team_detial)
    }
  }
}

expense_common.post_query_record_team_approval = function (params) {
  http.post(SERVER.EXPECSE_RECORD.QUERY_RECORD_TEAM_APPROVAL, params, expense_common.call_back_query_record_team_approval)
}

expense_common.call_back_query_record_team_approval = function (res) {
  console.log('-------call_back_query_record_team_approval: ', res)
  if (res && res.data) {
    if (res.data.result === 0) {
      let record_team_approval = res.data.res_info
      store.commit('update_record_team_approval', record_team_approval)
    }
  }
}

expense_common.post_audit_record_team_approval = function (params) {
  http.post(SERVER.EXPECSE_RECORD.AUDIT_RECORD_TEAM_APPROVAL, params, expense_common.call_back_audit_record_team_approval)
}

expense_common.call_back_audit_record_team_approval = function (res) {
  console.log('-------expense_common.call_back_audit_record_team_approval')
  // if (res && res.data) {
  //   if (res.data.result === 0) {
  //     let record_team_approval = res.data.res_info
  //     store.commit('update_record_team_approval', record_team_approval)
  //   }
  // }
}

export default expense_common
