
fetch('https://swapi.dev/api/planets/')
.then((response) => { 
  console.log(response)
  if(!response.ok) {
    throw new Error(`Status Code Error: ${response.status}`)
  } else {
  response.json().then((data) => {
    for(let planets of data.results) {
      // const h1 = document.createElement('h1')
      // h1.innerText = planets.name
      // document.body.appendChild(h1)
      console.log(planets.name)
    }
  })
}}).catch((err) => {
  console.log('ERROR')
  console.log(err)
})
