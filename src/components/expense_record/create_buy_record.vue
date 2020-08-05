<template>
  <div @click="resetState">
    <van-cell-group>
      <van-cell title="消费项" v-bind:value="item_select_value" @click.stop.prevent="change_switch_item_select($event, true)"/>
      <van-action-sheet
        v-bind:show="switch_item_select"
        v-bind:actions="buy_items"
        @close="onClose"
        @select="get_item_select_value"
      />
      <div v-if="need_show_create_buy_item === true">
        <createBuyItem></createBuyItem>
      </div>
      <van-field label="消费名称" type="text" placeholder="请输入消费名称" @input='get_input_fill_body($event, "buy_name")'/>
      <van-field label="消费金额" type="digit" confirm-type="done" placeholder="请输入消费金额" @input='get_input_fill_body($event, "buy_amount")'/>
      <van-field label="消费人" type="text" placeholder="请输入消费人" @input='get_input_fill_body($event, "buy_user")'/>
      <van-field label="消费地址" type="text" placeholder="请输入消费地址" @input='get_input_fill_body($event, "buy_address")'/>
      <van-field label="消费备注" type="text" placeholder="请输入消费备注" @input='get_input_fill_body($event, "buy_memo")'/>
      <van-cell title="消费时间" v-bind:value="body.buy_time" @click.stop.prevent="switch_buy_time($event, true)"/>
      <van-calendar v-bind:show="switch_buy_time" @close="switch_buy_time($event, false)" @confirm="get_buy_time_value"  @click.stop.prevent="switch_buy_time($event, true)"/>
      <van-cell title="消费组" v-bind:value="record_teamSelectValue" @click.stop.prevent="switch_record_team($event, true)"/>
      <van-action-sheet
        v-bind:show="switch_record_team_select"
        v-bind:actions="record_team"
        @close="onClose"
        @select="get_record_team_select_value"
      />
      <div v-if="need_show_create_buy_item === true">
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
import expense_common from './expense_common'

export default {
  data () {
    return {
      body: {
        buy_time: common.dateFormat()
      },
      item: [],
      item_select_value: '待选择',
      record_teamSelectValue: '默认',
      switch_item_select: false,
      switch_record_team_select: false,
      switch_buy_time: false,
      back_url: null
    }
  },
  computed: {
    need_show_create_buy_item () {
      return store.state.need_show_create_buy_item
    },
    buy_items () {
      return store.state.buy_items
    },
    record_team () {
      return store.state.record_team
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
    change_switch_item_select (e, value) {
      if (value) {
        this.switch_item_select = value
      }
    },
    switch_buy_time (e, value) {
      if (value) {
        this.switch_buy_time = value
      }
    },
    switch_record_team (e, value) {
      if (value) {
        this.switch_record_team_select = value
      }
    },
    get_item_select_value (e) {
      if (e.mp.detail.item_id === -1) {
        store.commit('need_create_buy_item_true')
      } else {
        this.body['item_id'] = e.mp.detail.item_id
        this.item_select_value = e.mp.detail.name
        this.switch_item_select = false
        store.commit('need_create_buy_item_false')
      }
    },
    get_record_team_select_value (e) {
      this.body['team_id'] = e.mp.detail.team_id
      this.record_teamSelectValue = e.mp.detail.team
      this.switch_record_team_select = false
      store.commit('switch_show_create_record_team', false)
    },
    get_buy_time_value (e) {
      this.body['buy_time'] = common.dateFormat(new Date(e.mp.detail), 'YYYY-mm-dd HH:MM:SS')
      this.switch_buy_time = false
    },
    resetState (e) {
      this.switch_item_select = false
      this.switch_buy_time = false
      this.switch_record_team_select = false
    },
    call_back_create_buy_record () {
      if (this.back_url) {
        wx.switchTab({url: '../index/main'})
      }
      expense_common.post_query_buy_record()
    }
  },
  onLoad (options) {
    if (options.back_url) {
      this.back_url = options.back_url
    }
  },
  created () {
    expense_common.post_query_buy_item()
  }
}
</script>

<style>
</style>
