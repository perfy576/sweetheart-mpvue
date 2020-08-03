<template>
  <div>
    <van-button type="primary" open-type="share">分享 page</van-button>
    <van-button type="primary" @click="pageToJoinRecordTeam">直接去</van-button>

    <joinRecordTeam></joinRecordTeam>
    <createRecordTeam></createRecordTeam>
    <van-grid>
      <van-grid-item icon="photo-o" text="添加流水记录" @click="pageToCreateBuyRecord" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="测试按钮" @click="test" />
    </van-grid>
    <showBuyRecord></showBuyRecord>
    <wxmpLogin></wxmpLogin>
  </div>
</template>

<script>
import card from '@/components/card'
// import common from '@/components/common/common'
import EXPENSE_SERVER from '@/components/expense_record/server'
import wxmpLogin from '@/components/login/wxmp_login'
import createBuyItem from '@/components/expense_record/create_buy_item'
import showBuyRecord from '@/components/expense_record/show_buy_record'
import createRecordTeam from '@/components/expense_record/create_record_team'
import joinRecordTeam from '@/components/expense_record/join_record_team'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card,
    wxmpLogin,
    createBuyItem,
    showBuyRecord,
    createRecordTeam,
    joinRecordTeam
  },

  methods: {
    pageToCreateBuyRecord () {
      let url = '../create_buy_record/main'
      let params = '?back_url="../index/main"'
      mpvue.navigateTo({url: url + params})
    },
    pageToJoinRecordTeam () {
      let url = '/pages/share_join_record_team/main'
      mpvue.navigateTo({url: url})
    },
    test () {
      console.log('------ share')
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
    }
  },

  created () {
    // let app = getApp()
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
  },
  onLaunch: function (ops) {
    console.log('-----onLaunch ops:', ops)
    // wx.getShareInfo({
    //   shareTicket: ops.shareTicket,
    //   success: function (res) {
    //     console.log('wx.getShareInfo:::', res)
    //   }
    // })
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
