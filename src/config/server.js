let SERVER = {}

SERVER.URL_PREFIX = 'http://119.28.161.33:19999/'

SERVER.WXMP = {
  WX_LOGIN: '/wxmp/wxmp_login'
}

SERVER.EXPECSE_RECORD = {
  CREATE_BUY_ITEM: '/expense_record/expense_create_item',
  QUERY_BUY_ITEM: '/expense_record/expense_query_item',
  CREATE_BUY_RECORD: '/expense_record/expense_create_buy_record',
  QUERY_BUY_RECORD: '/expense_record/expense_query_buy_record'
}
export default SERVER
