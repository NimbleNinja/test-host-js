(function inject() {
  document.body.style.backgroundColor = 'blue'
  setTimeout(() => {
    document.body.style.backgroundColor = 'red'
  }, 3000)
})()