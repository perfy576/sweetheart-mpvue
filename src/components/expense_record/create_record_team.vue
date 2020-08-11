<template>
  <div>
    <van-cell-group>
      <van-field label="消费组" placeholder="请输入消费组" @input='get_input_fill_body($event, "team")' />
      <van-field label="消费组备注" placeholder="请输入消费组备注" @input='get_input_fill_body($event, "memo")' />
      <van-button type="primary" @click="post_create_record_team">提交</van-button>
    </van-cell-group>
  </div>
</template>
<script>

import http from '@/components/common/http.js'
import EXPENSE_SERVER from './server.js'
import store from './store'
import expense_common from './expense_common'

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
    post_create_record_team () {
      let params = {}
      params['body'] = this.body
      http.post(EXPENSE_SERVER.EXPECSE_RECORD.CREATE_RECORD_TEAM, params, this.call_back_create_record_team.bind(this))
    },
    call_back_create_record_team () {
      store.commit('switch_show_create_record_team', false)
      expense_common.post_query_record_team()
    }
  }
}
</script>

<style>
</style>
