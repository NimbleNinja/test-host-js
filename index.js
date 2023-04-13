document.body.style.backgroundColor = 'blue'
const btn = document.createElement('button')
btn.textContent = 'change background color'
btn.style.fontSize = '20px'
document.body.appendChild(btn)
btn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white'
  alert('listener work')
})
