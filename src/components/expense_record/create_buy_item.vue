<template>
  <div>
    <van-cell-group>
      <van-field label='消费项归属' placeholder='请输入消费项归属' @input='get_input_fill_body($event, "item")'  />
      <van-field label='消费项备注' placeholder='请输入消费项备注' @input='get_input_fill_body($event, "item_memo")'/>
      <van-button type='primary' @click='post_create_buy_item'>提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>

import http from '@/components/common/http.js'
import SERVER from '@/config/server.js'
import store from './store'
import expenseCommon from './expense_common'

export default {
  data () {
    return {
      body: {}
    }
  },

  methods: {
    get_input_fill_body (event, key) {
      this.body[key] = event.mp.detail
    },
    post_create_buy_item () {
      let params = {}
      params['body'] = this.body
      http.post(SERVER.EXPECSE_RECORD.CREATE_BUY_ITEM, params, this.call_back_create_buy_item.bind(this))
    },
    call_back_create_buy_item () {
      store.commit('need_create_buy_item_false')
      expenseCommon.post_query_buy_item()
    }
  }
}
</script>

<style>
</style>
