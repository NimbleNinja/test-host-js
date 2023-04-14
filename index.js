const bidInfoElement = document.querySelector('#vdActionInfo')
const parentBidInfoElement = bidInfoElement.parentNode

const div = document.createElement('div')
div.id = 'r_o_o_t'
parentBidInfoElement.insertBefore(div, bidInfoElement)
