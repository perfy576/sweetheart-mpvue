<template>
  <div>
    <van-cell-group v-if="team_manage != null">
      <van-button type="primary" @click="post_join_record_team">申请加入: {{team_manage.team}}</van-button>
    </van-cell-group>
  </div>
</template>
<script>

import http from '@/components/common/http.js'
import EXPENSE_SERVER from './server.js'
// import store from './store'
// import expense_common from './expense_common'

export default {
  data () {
    return {
      body: {}
    }
  },
  props: ['team_manage'],
  methods: {
    get_input_fill_body (event, key) {
      this.body[key] = event.mp.detail
    },
    post_join_record_team () {
      let params = {}
      let body = {}
      body['team_id'] = this.team_manage.team_id
      params['body'] = body
      http.post(EXPENSE_SERVER.EXPECSE_RECORD.JOIN_RECORD_TEAM, params, this.call_back_create_record_team.bind(this))
    },
    call_back_create_record_team () {
      // store.commit('switch_show_create_record_team', false)
      // expense_common.post_query_record_team()
    }
  }
}
</script>

<style>
</style>
