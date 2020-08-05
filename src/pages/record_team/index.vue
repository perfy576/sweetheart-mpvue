<template>
  <div>
    <van-collapse
      v-bind:value="activeNames"
      @change="switchRecordTeamList"
      v-for="(value, index) in record_team"
      :key="index"
      border="false"
    >
      <van-collapse-item v-bind:name="index" border="false" class="no_padding">
        <view slot="title" class="no_padding">
          <div class="buy_record">
            <div class="buy_name">
              <span>{{value.team}}</span>
            </div>
            <div class="buy_amount">
              <span>{{value.buy_amount}}</span>
            </div>
            <div class="buy_time">
              <span>{{value.auth_type}}</span>
            </div>
          </div>
        </view>
        <div>
          <van-button
            v-if="value.auth_type === 1"
            type="primary"
            @click="pageToRecordTeamManage($event, value.team_id)"
          >管理</van-button>
          <van-button
            v-if="value.share_state === 1"
            type="primary"
            v-bind:dataset="value.team_id"
            open-type="share"
          >分享</van-button>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

import expense_common from '@/components/expense_record/expense_common'
import store from '@/components/expense_record/store'
import EXPENSE_SERVER from '@/components/expense_record/server.js'
// import common from '@/components/common/common.js'

export default {
  data () {
    return {
      activeNames: ['1'],
      team_id: null
    }
  },
  computed: {
    record_team () {
      return store.state.record_team
    }
  },
  methods: {
    switchRecordTeamList (event) {
      console.log(event.mp)
      this.activeNames = event.mp.detail
    },
    pageToRecordTeamManage (event, team_id) {
      console.log('------ team manage :', team_id)
      let url = '/pages/record_team_manage/main?team_id=' + team_id
      mpvue.navigateTo({url: url})
    }
  },
  created () {
    expense_common.post_query_record_team()
  },
  onLoad (options) {
    console.log('-----------team_id', options)
    if (options.team_id) {
      this.team_id = options.team_id
    }
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },
  onShareAppMessage: function (res) {
    let title = '转发加入小组'
    let path = EXPENSE_SERVER.PAGE.RECORD_TEAM_MANAGE + '?team_id=' + res.target.dataset.detail
    console.log('----- onShareAppMessage: ', path)

    return {
      title: title,
      path: path,
      success: function (res) {
        console.log('----- 设置分享内容成功', res)
      }
    }
  }
}
</script>

<style>
.buy_record {
  display: inline-grid;
  grid-template-columns: 40% 10% 50%;
  padding: 0;
  margin: 0;
  width: 100%;
}
.buy_amount {
  padding: 0;
  margin: 0;
  width: 100%;
  width: 100%;
  text-align: right;
}
.buy_time {
  padding: 0;
  margin: 0;
  width: 100%;
  width: 100%;
  text-align: right;
}
</style>
