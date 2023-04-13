(function inject() {
  document.body.style.backgroundColor = 'blue'
  setTimeout(() => {
    document.body.style.backgroundColor = 'red'
  }, 3000)
  const title = document.createElement('h1')
  title.textContent = 'WOOOOOOOOOOOOOOOOOORK'
  document.body.appendChild(title)
})()