<template>
  <div>
    <van-collapse
      v-bind:value="activeNames"
      @change="switchOrderList"
      v-for="(value,index) in buy_records"
      :key="index"
      border="false"
    >
      <van-collapse-item v-bind:name="index" border="false" class="no_padding">
        <view slot="title" class="no_padding">
          <div class="buy_record">
            <div class="buy_name">
              <span>{{value.buy_name}}</span>
            </div>
            <div class="buy_amount">
              <span>{{value.buy_amount}}</span>
            </div>
            <div class="buy_time">
              <span>{{value.buy_time}}</span>
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

export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    buy_records () {
      return store.state.buy_records
    }
  },
  methods: {
    switchOrderList (event) {
      console.log(event.mp)
      this.activeNames = event.mp.detail
    }
  },
  created () {
    expense_common.post_query_buy_record()
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
