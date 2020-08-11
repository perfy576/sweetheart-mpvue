// import ROOT_SERVER from '@/config/server.js'

let EXPENSE_SERVER = {}

EXPENSE_SERVER.EXPECSE_RECORD = {
  CREATE_BUY_ITEM: '/expense_record/expense_create_item',
  QUERY_BUY_ITEM: '/expense_record/expense_query_item',
  CREATE_BUY_RECORD: '/expense_record/expense_create_record_record',
  QUERY_BUY_RECORD: '/expense_record/expense_query_buy_record',
  CREATE_RECORD_TEAM: '/expense_record/expense_create_record_team',
  QUERY_RECORD_TEAM: '/expense_record/expense_query_record_team',
  QUERY_RECORD_TEAM_DETIAL: '/expense_record/expense_query_record_team_detail',
  JOIN_RECORD_TEAM: '/expense_record/expense_join_record_team',
  QUERY_RECORD_TEAM_APPROVAL: '/expense_record/expense_query_record_team_approval',
  AUDIT_RECORD_TEAM_APPROVAL: '/expense_record/expense_audit_record_team_approval'
}

EXPENSE_SERVER.PAGE = {
  RECORD_TEAM_MANAGE: 'pages/record_team_manage/main'
}

export default EXPENSE_SERVER
