const bidInfoElement = document.querySelector('#vdActionInfo')
const parentBidInfoElement = bidInfoElement.parentNode

const btn = document.createElement('button')
btn.textContent = 'change background color'
btn.classList.add('btn')

parentBidInfoElement.insertBefore(btn, bidInfoElement)

btn.addEventListener('click', () => {
  alert('listener work')
})
