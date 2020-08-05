<template>
  <div>
    <div>管理 record_team_manage: {{ team_id }}</div>
    <!-- 加入组 -->
    <joinRecordTeam v-if="exist_in_team === false" :team_manage="team_manage"></joinRecordTeam>
    <showRecordTeamApproval></showRecordTeamApproval>
    <wxmpLogin></wxmpLogin>
  </div>
</template>

<script>
import expense_common from '@/components/expense_record/expense_common'
import joinRecordTeam from '@/components/expense_record/join_record_team'
import showRecordTeamApproval from '@/components/expense_record/show_record_team_approval'
// import store from '@/components/expense_record/store'
// import EXPENSE_SERVER from '@/components/expense_record/server.js'
import wxmpLogin from '@/components/login/wxmp_login'

export default {
  data () {
    return {
      team_id: null,
      exist_in_team: false,
      team_manage: null
    }
  },
  components: {
    joinRecordTeam,
    showRecordTeamApproval,
    wxmpLogin
  },
  methods: {
    call_back_post_query_record_team_manage (res) {
      console.log('---- self call_back_post_query_record_team_manage', res)
      this.team_manage = res.data.res_info.team_manage[0]
      this.exist_in_team = res.data.res_info.exist_in_team
    }
  },
  created () {

  },
  onLoad (options) {
    console.log('----- join record team: ', options.team_id)
    this.team_id = options.team_id
    let params = {}
    let body = {}
    body['team_id'] = this.team_id
    params['body'] = body
    expense_common.post_query_record_team_manage(params, this.call_back_post_query_record_team_manage.bind(this))
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
