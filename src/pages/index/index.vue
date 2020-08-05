<template>
  <div>
    <createRecordTeam></createRecordTeam>
    <van-grid>
      <van-grid-item icon="photo-o" text="添加流水记录" @click="pageToCreateBuyRecord" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="消费组管理" @click="pageToRecordTeam" />
    </van-grid>
    <showBuyRecord></showBuyRecord>
    <wxmpLogin></wxmpLogin>
  </div>
</template>

<script>
import card from '@/components/card'
// import common from '@/components/common/common'
// import EXPENSE_SERVER from '@/components/expense_record/server'
import wxmpLogin from '@/components/login/wxmp_login'
import createBuyItem from '@/components/expense_record/create_buy_item'
import showBuyRecord from '@/components/expense_record/show_buy_record'
import createRecordTeam from '@/components/expense_record/create_record_team'

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
    createRecordTeam
  },

  methods: {
    pageToCreateBuyRecord () {
      let url = '../create_buy_record/main'
      let params = '?back_url="../index/main"'
      mpvue.navigateTo({url: url + params})
    },
    pageToRecordTeam () {
      console.log('------ share')
      let url = '../record_team/main'
      mpvue.navigateTo({url: url})
    }
  },
  created () {
    // // let app = getApp()
    // let url = 'pages/record_team_manage/main?team_id=f7d035645246cfea6aa680538071c123'
    // mpvue.navigateTo({url: url})
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
