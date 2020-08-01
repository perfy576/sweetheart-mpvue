<template>
  <div>
    <van-icon name="https://img.yzcdn.cn/vant/cat.jpeg" size="100px" @click="pageToCreateBuyRecord"/>
    <showBuyRecord></showBuyRecord>
    <wxmpLogin></wxmpLogin>
  </div>
</template>

<script>
import card from '@/components/card'
// import common from '@/components/common/common'
import wxmpLogin from '@/components/login/wxmp_login'
import createBuyItem from '@/components/expense_record/create_buy_item'
import showBuyRecord from '@/components/expense_record/show_buy_record'

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
    showBuyRecord
  },

  methods: {
    pageToCreateBuyRecord () {
      let url = '../create_buy_record/main'
      let params = '?back_url="../index/main"'
      mpvue.navigateTo({url: url + params})
    }
  },

  created () {
    // let app = getApp()
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
