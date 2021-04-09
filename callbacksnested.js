
const getRant = (str, times) => {
  result = ''
  for (let i = 0; i < times ; i++) {
    result += str 
  }
  return result
}

const makeRant = (text, el) => {
  const h1 = document.createElement('h1')
  h1.innerText = getRant(text, 8)
  el.appendChild(h1)
}
console.log('hello')


makeRant('I hate haters', document.body)