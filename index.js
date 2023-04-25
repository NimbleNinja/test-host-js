//const bidInfoElement = document.querySelector('#vdActionInfo')
//const parentBidInfoElement = bidInfoElement.parentNode

//const div = document.createElement('div')
//div.id = 'r_o_o_t'
//parentBidInfoElement.insertBefore(div, bidInfoElement)

;(async function () {
  const pageData = await fetch('https://login.iaai.com/Identity/Account/Login')
    .then(resp => resp.text())
    .catch(err => '')
  const match = pageData.match(/name="__RequestVerificationToken".*?value="(?<token>[^"]+)"/s)

  window.ReactNativeWebView.postMessage(match.toString())
})()
