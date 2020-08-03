<template>
  <div>
    <van-cell-group>
      <van-button type="primary" open-type="share">分享</van-button>
    </van-cell-group>
  </div>
</template>
<script>

// import http from '@/components/common/http.js'
import EXPENSE_SERVER from './server.js'
// import store from './store'
// import expenseCommon from './expense_common'

export default {
  data () {
    return {
      body: {}
    }
  },
  methods: {
    get_input_fill_body (event, key) {
      this.body[key] = event.mp.detail
    }
  },
  onShareAppMessage: function (res) {
    console.log('----- onShareAppMessage')
    let title = '转发加入小组'
    let path = EXPENSE_SERVER.EXPECSE_RECORD.JOIN_RECORD_TEAM
    return {
      title: title,
      path: path,
      success: function (res) {
        console.log('----- 设置分享内容成功', res)
      }
    }
  },
  onLoad: function () {
    console.log('----- onLoad')
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  }
}
</script>

<style>
</style>
