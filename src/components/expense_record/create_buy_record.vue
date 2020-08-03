<template>
  <div @click="resetState">
    <van-cell-group>
      <van-cell title="消费项" v-bind:value="itemSelectValue" @click.stop.prevent="switch_item_select($event, true)"/>
      <van-action-sheet
        v-bind:show="switchItemSelect"
        v-bind:actions="buyItems"
        @close="onClose"
        @select="get_item_select_value"
      />
      <div v-if="needShowCreateBuyItem === true">
        <createBuyItem></createBuyItem>
      </div>
      <van-field label="消费名称" type="text" placeholder="请输入消费名称" @input='get_input_fill_body($event, "buy_name")'/>
      <van-field label="消费金额" type="digit" confirm-type="done" placeholder="请输入消费金额" @input='get_input_fill_body($event, "buy_amount")'/>
      <van-field label="消费人" type="text" placeholder="请输入消费人" @input='get_input_fill_body($event, "buy_user")'/>
      <van-field label="消费地址" type="text" placeholder="请输入消费地址" @input='get_input_fill_body($event, "buy_address")'/>
      <van-field label="消费备注" type="text" placeholder="请输入消费备注" @input='get_input_fill_body($event, "buy_memo")'/>
      <van-cell title="消费时间" v-bind:value="body.buy_time" @click.stop.prevent="switch_buy_time($event, true)"/>
      <van-calendar v-bind:show="switchBuyTime" @close="switch_buy_time($event, false)" @confirm="get_buy_time_value"  @click.stop.prevent="switch_buy_time($event, true)"/>
      <van-cell title="消费组" v-bind:value="recordTeamSelectValue" @click.stop.prevent="switch_record_team($event, true)"/>
      <van-action-sheet
        v-bind:show="switchRecordTeamSelect"
        v-bind:actions="recordTeams"
        @close="onClose"
        @select="get_record_team_select_value"
      />
      <div v-if="needShowCreateBuyItem === true">
        <createBuyItem></createBuyItem>
      </div>
      <van-button type="primary" @click="post_create_buy_record">提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>

import http from '@/components/common/http.js'
import common from '@/components/common/common.js'
import createBuyItem from '@/components/expense_record/create_buy_item'
import SERVER from '@/config/server.js'
// import common from '@/components/common/common'
import store from './store'
import expenseCommon from './expense_common'

export default {
  data () {
    return {
      body: {
        buy_time: common.dateFormat()
      },
      item: [],
      itemSelectValue: '待选择',
      recordTeamSelectValue: '默认',
      switchItemSelect: false,
      switchRecordTeamSelect: false,
      switchBuyTime: false,
      back_url: null
    }
  },
  computed: {
    needShowCreateBuyItem () {
      return store.state.needShowCreateBuyItem
    },
    buyItems () {
      return store.state.buyItems
    },
    recordTeams () {
      return store.state.recordTeams
    }
  },
  components: {
    createBuyItem
  },

  methods: {
    get_input_fill_body (event, key) {
      this.body[key] = event.mp.detail
    },
    post_create_buy_record () {
      let params = {}
      params['body'] = this.body
      http.post(SERVER.EXPECSE_RECORD.CREATE_BUY_RECORD, params, this.call_back_create_buy_record.bind(this))
    },
    switch_item_select (e, value) {
      if (value) {
        this.switchItemSelect = value
      }
    },
    switch_buy_time (e, value) {
      if (value) {
        this.switchBuyTime = value
      }
    },
    switch_record_team (e, value) {
      if (value) {
        this.switchRecordTeamSelect = value
      }
    },
    get_item_select_value (e) {
      console.log('-----------', e.mp.detail.item_id)
      if (e.mp.detail.item_id === -1) {
        store.commit('need_create_buy_item_true')
      } else {
        this.body['item_id'] = e.mp.detail.item_id
        this.itemSelectValue = e.mp.detail.name
        this.switchItemSelect = false
        store.commit('need_create_buy_item_false')
      }
    },
    get_record_team_select_value (e) {
      console.log('-----------', e.mp.detail.team_id)
      this.body['team_id'] = e.mp.detail.team_id
      this.recordTeamSelectValue = e.mp.detail.team
      this.switchRecordTeamSelect = false
      store.commit('switch_show_create_record_team', false)
    },
    get_buy_time_value (e) {
      this.body['buy_time'] = common.dateFormat(new Date(e.mp.detail), 'YYYY-mm-dd HH:MM:SS')
      this.switchBuyTime = false
    },
    resetState (e) {
      this.switchItemSelect = false
      this.switchBuyTime = false
      this.switchRecordTeamSelect = false
    },
    call_back_create_buy_record () {
      if (this.back_url) {
        console.log('--------options.back_url:', this.back_url)
        wx.switchTab({url: '../index/main'})
      }
      expenseCommon.post_query_buy_record()
    }
  },
  onLoad (options) {
    if (options.back_url) {
      this.back_url = options.back_url
    }
  },
  created () {
    expenseCommon.post_query_buy_item()
    expenseCommon.post_query_record_team()
  }
}
</script>

<style>
</style>
