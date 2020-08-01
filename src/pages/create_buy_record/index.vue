<template>
  <div class="create_buy_record">
    <p>创建消费记录</p>
    <createBuyRecord></createBuyRecord>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import createBuyRecord from '@/components/expense_record/create_buy_record'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    createBuyRecord
  },
  methods: {
  }
}
</script>

<style>
.create_buy_record {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
