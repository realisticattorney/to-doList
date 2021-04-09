const displayFiltered = (arr) => {
  if(arr.length === 0) {
    document.querySelector('#tasks-container').innerHTML = '<h2>No tasks created</h2>'
    return
  }
  const p = arr.map((task, index) => (
    `<div class='singleTask'>
      <h3>${task.name}</h3>
      <input class='task-input editing' value=${task.name}>
      <p>${task.desc}</p>
      <input class='task-input editing' value=${task.desc}>
      <p>${task.priority}</p>
      <input class='task-input editing' value=${task.priority}>
      <p>${task.date}</p>
      <input class='task-input editing' type='date' value=${task.date}>

      <button id='edit-btn' type='button' onClick='editTask()'>Edit</button>
      
      <button class='task-input editing' type='button'>Save</button>

      <button class='task-input editing' type='button' onClick='deleteTask(${index})'>Delete</button>
    </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
}

const filteringBtns = () => {
  const projectBtns = document.querySelectorAll('.projectBtn');

  for(let i = 0; i < projectBtns.length; i += 1) {
    projectBtns[i].addEventListener('click', () => {
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      const filteredTasks = tasks.filter(task => {
        if(task.project == projectBtns[i].innerText) {
          return task
        }
      })
      displayFiltered(filteredTasks)
    })
  }
}


module.exports = {
  filteringBtns
}