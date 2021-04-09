
const form = document.querySelector('#signup-form')
const inputs = document.querySelectorAll('input')
const h1 = document.createElement('h1')

const formForm = form.addEventListener('submit', function(e) {
  e.preventDefault()
  let values = []
  const firstInput = inputs[0].value
  values += firstInput
  h1.innerText = values
  document.body.appendChild(h1)
  alert('submitted')
})

