import { editTask } from './task';

const displayAll = (arr) => {
  
}

const displayPast = () => {

}

const displayToday = () => {

}

const displayFiltered = (arr) => {
  if(arr.length === 0) {
    document.querySelector('#tasks-container').innerHTML = '<h2>No tasks created</h2>'
    return
  }
  const p = arr.map(task => (
    `<div class='singleTask'>
      <h3>${task.name}</h3>
    </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
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


export {
  filteringBtns
}