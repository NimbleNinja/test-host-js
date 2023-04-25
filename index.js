//const bidInfoElement = document.querySelector('#vdActionInfo')
//const parentBidInfoElement = bidInfoElement.parentNode

//const div = document.createElement('div')
//div.id = 'r_o_o_t'
//parentBidInfoElement.insertBefore(div, bidInfoElement)

//;(async function testToken() {
//  fetch('https://login.iaai.com/Identity/Account/Login')
//    .then(res => {
//      window.ReactNativeWebView.postMessage(JSON.stringify(res))
//    })
//    .catch(err => {
//      window.ReactNativeWebView.postMessage(JSON.stringify(err))
//    })
//})()

window.ReactNativeWebView.postMessage(`${document.head}`)

//;(async function testToken() {
//  const res = await fetch('https://api.github.com/users')
//  const data = await res.json()

//  window.ReactNativeWebView.postMessage(JSON.stringify(data))
//})()
