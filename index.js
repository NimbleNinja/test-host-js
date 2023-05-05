//const targetDOM = document.body

//const mutationCallback = mutations => {
//  for (const mutation of mutations) {
//    const formElement = mutation.target.querySelector('form[name="prelimBidForm"]')
//    console.log(formElement)
//  }
//}
//const mutationConfig = { attributes: true, childList: true, subtree: true }
//const observer = new MutationObserver(mutationCallback)

//observer.observe(targetDOM, mutationConfig)

//console.log('scr 2')

const mutationCallback = mutations => {
  for (const mutation of mutations) {
    const formElement = mutation.target.querySelector('form[name="prelimBidForm"]')

    if (formElement) {
      console.log(formElement)
      observer.disconnect()

      const buttonEll = document.createElement('button')
      buttonEll.id = 'btn_el'
      buttonEll.style.backgroundColor = 'red'
      buttonEll.textContent = 'button'

      buttonEll.addEventListener('click', () => console.log('work'))

      formElement.appendChild(buttonEll)
      break
    }
  }
}
