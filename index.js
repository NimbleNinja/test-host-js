const btn = document.createElement('button')
btn.textContent = 'change background color'
btn.classList.add('btn')

document.body.appendChild(btn)

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white'
  alert('listener work')
})
