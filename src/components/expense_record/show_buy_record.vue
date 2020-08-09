<template>
  <div @click="resetState">
    <van-cell
      title="消费组"
      v-bind:value="record_teamSelectValue"
      @click.stop.prevent="switch_record_team($event, true)"
    />
    <van-action-sheet
      v-bind:show="switch_record_team_select"
      v-bind:actions="record_team"
      @close="onClose"
      @select="get_record_team_select_value"
    />
    <van-collapse
      v-bind:value="activeNames"
      @change="switchOrderList"
      v-for="(value,index) in buy_records"
      :key="index"
      border="false"
    >
      <van-collapse-item v-bind:name="index" border="false" class="no_padding">
        <view slot="title" class="no_padding">
          <div class="record_record">
            <div class="record_name">
              <span>{{value.record_name}}</span>
            </div>
            <div class="record_amount">
              <span>{{value.record_amount}}</span>
            </div>
            <div class="record_time">
              <span>{{value.record_time}}</span>
            </div>
          </div>
        </view>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

import expense_common from './expense_common'
import store from './store'
import wx_login from '@/components/login/wx_login.js'

export default {
  data () {
    return {
      activeNames: ['1'],
      record_teamSelectValue: '默认',
      switch_record_team_select: false,
      body: {team_id: null}
    }
  },
  computed: {
    buy_records () {
      return store.state.buy_records
    },
    record_team () {
      return store.state.record_team
    }
  },
  methods: {
    switchOrderList (event) {
      this.activeNames = event.mp.detail
    },
    switch_record_team (e, value) {
      if (value) {
        this.switch_record_team_select = value
      }
    },
    get_record_team_select_value (e) {
      this.body["team_id"] = e.mp.detail.team_id
      this.record_teamSelectValue = e.mp.detail.team
      this.switch_record_team_select = false
      let params = {}
      params["body"] = this.body
      wx_login.do_after_login(expense_common.post_query_buy_record.bind(this, params))
    },
    resetState (e) {
      this.switch_record_team_select = false
    }
  },
  created () {
    let query_record_team = {}
    let query_record_team_config = {}
    query_record_team_config["query_for_buy_record"] = 1
    query_record_team["config"] = query_record_team_config
    wx_login.do_after_login(expense_common.post_query_buy_record.bind(this))
    wx_login.do_after_login(expense_common.post_query_record_team.bind(this, query_record_team))
  }
}
</script>

<style>
.record_record {
  display: inline-grid;
  grid-template-columns: 40% 10% 50%;
  padding: 0;
  margin: 0;
  width: 100%;
}
.record_amount {
  padding: 0;
  margin: 0;
  width: 100%;
  width: 100%;
  text-align: right;
}
.record_time {
  padding: 0;
  margin: 0;
  width: 100%;
  width: 100%;
  text-align: right;
}
</style>
