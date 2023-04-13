document.body.style.backgroundColor = 'blue'
const btn = document.createElement('button')
btn.textContent = 'change background color'
btn.style.fontSize = '20px'
document.body.insertBefore(btn, document.querySelector('.FPdoLc'))
btn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white'
  alert('listener work')
})
