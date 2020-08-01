<template>
  <div>
    <van-collapse v-bind:value="activeNames" @change="switchOrderList" v-for="(value,index) in buyRecords" :key="index">
      <van-collapse-item  v-bind:name="index">
        <view slot="title">
          <van-cell v-bind:title="value.buy_name" v-bind:value="value.buy_amount" v-bind:label="value.buy_time" border="false"/>
        </view>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>

import expenseCommon from './expense_common'
import store from './store'

export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    buyRecords () {
      return store.state.buyRecords
    }
  },
  methods: {
    switchOrderList (event) {
      console.log(event.mp)
      this.activeNames = event.mp.detail
    }
  },
  created () {
    expenseCommon.post_query_buy_record()
  }
}
</script>

<style>
</style>
