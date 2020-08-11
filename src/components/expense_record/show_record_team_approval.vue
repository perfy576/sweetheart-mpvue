<template>
  <div>
    <div>审批</div>
    <van-collapse
      v-bind:value="activeNames"
      @change="change_switch_record_team_approval"
      v-for="(value,index) in record_team_approval.approval"
      :key="index"
      border="false"
    >
      <van-collapse-item v-bind:name="index" border="false" class="no_padding">
        <view slot="title" class="no_padding">
          <div class="record_team_approval">
            <div class="req_id">
              <span>{{value.req_id}}</span>
            </div>
            <div class="uid">
              <span>{{value.uid}}</span>
            </div>
            <!-- <div class="create_time">
              <span>{{value.create_time}}</span>
            </div>-->
          </div>
        </view>
        <van-button type="primary" @click="auditRecordTeamApproval($event, value.req_id, 2)">通过</van-button>
        <van-button type="primary" @click="auditRecordTeamApproval($event, value.req_id, 3)">驳回</van-button>
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
    record_team_approval () {
      return store.state.record_team_approval
    }
  },
  methods: {
    change_switch_record_team_approval (event) {
      console.log(event.mp)
      this.activeNames = event.mp.detail
    },
    auditRecordTeamApproval (event, req_id, auditResult) {
      let params = {}
      let body = {}
      body['req_id'] = req_id
      body['state'] = auditResult
      params['body'] = body
      expense_common.post_audit_record_team_approval(params)
    }
  },
  created () {
    expense_common.post_query_record_team_approval()
  }
}
</script>

<style>
.record_team_approval {
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
