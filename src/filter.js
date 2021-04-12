import { editTask } from './task';
import { updatedTasks } from './utils';

const date = new Date();

const displayAll = () => {
  const tasksArr = updatedTasks();
  const p = tasksArr.map(task => (
    `<div class='singleTask d-flex'>
      <div>
        <h3>${task.name}</h3>
        <p>${task.date.slice(5)}</p>
        </div>
      </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
}
// Not working
const displayPast = () => {
  const tasksArr = updatedTasks();
  const filteredArr = tasksArr.filter(task => parseInt(task.date.slice(8)) < date.getDate());
  const p = filteredArr.map(task => (
    `<div class='singleTask d-flex'>
      <div>
        <h3>${task.name}</h3>
        <p>${task.date.slice(5)}</p>
        </div>
      </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
}

const displayToday = () => {
  const tasksArr = updatedTasks();
  const filteredArr = tasksArr.filter(task => task.date.slice(8) === date.getDate());
  const p = filteredArr.map(task => (
    `<div class='singleTask d-flex'>
      <div>
        <h3>${task.name}</h3>
        <p>${task.date.slice(5)}</p>
        </div>
      </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
}

const displayFiltered = (arr) => {
  if(arr.length === 0) {
    document.querySelector('#tasks-container').innerHTML = '<h2>No tasks created</h2>'
    return
  }
  const p = arr.map(task => (
    `<div class='singleTask d-flex'>
      <div>
        <h3>${task.name}</h3>
        <p>${task.date.slice(5)}</p>
        </div>
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
  filteringBtns,
  displayToday,
  displayPast,
}