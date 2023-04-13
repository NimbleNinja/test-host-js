;(function inject() {
  document.body.style.backgroundColor = 'blue'
  const title = document.createElement('h1')
  title.textContent = 'WOOOOOOOOOOOOOOOOOORK'
  title.style.color = 'green'
  title.style.fontSize = '50px'
  document.body.appendChild(title)
  title.addEventListener('click', () => {
    alert('listener work')
    document.body.style.backgroundColor = 'white'
  })
})()
