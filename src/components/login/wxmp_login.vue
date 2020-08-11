<template>
  <div></div>
</template>

<script>
import wx_login from '@/components/login/wx_login.js'

export default {
  data () {
    return {
      has_login: false
    }
  },
  methods: {
  },
  created () {
    wx_login.login()
  }
}
</script>

<style>
</style>
