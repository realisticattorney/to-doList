
const firstReq = new XMLHttpRequest() 

firstReq.addEventListener('load', function() {console.log('IT WORKS')
console.log(JSON.parse(this.responseText))
const lol = JSON.parse(this.responseText)
for(let planets of lol.results) {
const h1 = document.createElement('h1')
h1.innerText = planets.name
document.body.appendChild(h1)}
})
firstReq.addEventListener('error', () => {console.log('errorsss')
})
firstReq.open('GET', 'https://swapi.dev/api/planets/')
firstReq.send()
console.log('Request Send!')
