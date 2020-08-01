let common = {}

common.switchTabPage = function (url) {
  if (mpvuePlatform === 'wx') {
    mpvue.switchTab({ url })
  } else {
    mpvue.navigateTo({ url })
  }
}

export default common
