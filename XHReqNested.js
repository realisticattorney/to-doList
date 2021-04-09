
const firstReq = new XMLHttpRequest() 
const secReq = new XMLHttpRequest()

firstReq.addEventListener('load', function() {console.log('IT WORKS')
console.log(JSON.parse(this.responseText))
const lol = JSON.parse(this.responseText)
for(let planets of lol.results) {
const h1 = document.createElement('h1')
h1.innerText = planets.name
document.body.appendChild(h1)


const div = document.createElement('div')
const obj = planets.films
document.body.appendChild(div)
secReq.addEventListener('load', function() {console.log('IT WORKS')
})
for(let movies of obj) {
secReq.open('GET', `${movies}`)  /// it works x10 (10 planets). But starts to be a nightmare of nestings etc. 
secReq.send()
 
}}

})

firstReq.addEventListener('error', () => {console.log('errorsss')
})

firstReq.open('GET', 'https://swapi.dev/api/planets/')
firstReq.send()
console.log('Request Send!')
