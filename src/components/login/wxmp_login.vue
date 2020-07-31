<template>
  <div>wxmp_login</div>
</template>

<script>

import wxLogin from '@/components/common/wx_login.js'

export default {
  data () {
    return {
      has_login: false
    }
  },

  methods: {
  },

  created () {
    wxLogin.login()
  }
}
</script>

<style>
</style>
