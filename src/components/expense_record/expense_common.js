import store from './store'
import http from '@/components/common/http.js'
import SERVER from '@/config/server.js'

let expenseCommon = {}

expenseCommon.post_query_buy_item = function () {
  console.log('-------expenseCommon.post_query_buy_item ')
  http.post(SERVER.EXPECSE_RECORD.QUERY_BUY_ITEM, null, expenseCommon.call_back_query_buy_item.bind(this))
}
expenseCommon.call_back_query_buy_item = function (res) {
  console.log('-------expenseCommon.call_back_query_buy_item ')
  let newItem = {}
  let item = []
  newItem.name = '新建消费项归类'
  newItem.item_id = -1
  newItem.item_memo = '新建'
  item.push(newItem)
  if (res && res.data) {
    if (res.data.result === 0) {
      let itemsArr = res.data.res_info
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

expenseCommon.post_query_buy_record = function () {
  http.post(SERVER.EXPECSE_RECORD.QUERY_BUY_RECORD, null, expenseCommon.call_back_query_buy_record)
}

expenseCommon.call_back_query_buy_record = function (res) {
  if (res && res.data) {
    if (res.data.result === 0) {
      store.commit('update_buy_record', res.data.res_info)
    }
  }
}

export default expenseCommon
