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
import expense_common from './expense_common'

export default {
  data () {
    return {
      body: {}
    }
  },
  props: ['team_id'],
  methods: {
    get_input_fill_body (event, key) {
      this.body[key] = event.mp.detail
    },
    post_create_buy_item () {
      let params = {}
      this.body['team_id'] = this.team_id
      params['body'] = this.body
      http.post(SERVER.EXPECSE_RECORD.CREATE_BUY_ITEM, params, this.call_back_create_buy_item.bind(this))
    },
    call_back_create_buy_item () {
      store.commit('need_create_buy_item_false')
      let params = {}
      let body = {}
      body['team_id'] = this.team_id
      params["body"] = body
      expense_common.post_query_buy_item(params)
    }
  }
}
</script>

<style>
</style>
