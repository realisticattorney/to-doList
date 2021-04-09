// const formQuery = document.querySelector("#signup-form")
// const taskInput = document.querySelector('#taskName');
// const activeCheckbox = document.querySelector('#active');
// const prioritySelect = document.querySelector('#priority');



// const formFunc = formQuery.addEventListener('submit', function(e) {
//   alert('Submitted')
//   console.log(e)
// e.preventDefault();
// console.log('name', taskInput.value)
// return { name: taskInput.value}
// })


fetch('https://swapi.dev/api/planets/')
.then((response) => { 
  console.log(response)
  if(!response.ok) 
    throw new Error(`Status Code Error: ${response.status}`)

  return response.json()
}).then((data) => {
  const filmURL = data.results[0].films[0]
  return fetch(filmURL)

  }
).then((response) => {
  if(!response.ok) 
    throw new Error(`Status Code Error: ${response.status}`)

  return response.json()
}).then((data) => { 
  console.log(data)
})
.catch((err) => {
  console.log('ERROR')
  console.log(err)
})

