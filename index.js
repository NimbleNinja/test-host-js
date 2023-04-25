//const bidInfoElement = document.querySelector('#vdActionInfo')
//const parentBidInfoElement = bidInfoElement.parentNode

//const div = document.createElement('div')
//div.id = 'r_o_o_t'
//parentBidInfoElement.insertBefore(div, bidInfoElement)

//;(async function testToken() {
//  const pageData = await fetch('https://login.iaai.com/Identity/Account/Login')
//    .then(resp => resp.text())
//    .catch(err => '')
//  const match = pageData.match(/name="__RequestVerificationToken".*?value="(?<token>[^"]+)"/s)

//  window.ReactNativeWebView.postMessage('message from webview')
//  window.ReactNativeWebView.postMessage(match?.groups?.token)
//})()
;(async function testToken() {
  const res = await fetch('https://api.github.com/users')
  const data = await res.json()

  window.ReactNativeWebView.postMessage(JSON.stringify(data))
})()
