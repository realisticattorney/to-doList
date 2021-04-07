import { displayProjects, projectCreation } from './project';

projectCreation();


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify(new Array));
  }

  if(JSON.parse(localStorage.getItem('tasks')) === null) {
    localStorage.setItem('tasks', JSON.stringify(new Array));
  }
  
  displayProjects();
})


// Tasks creation

const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskBtn = document.querySelector('#task-btn');

const createTask = (title, desc, date, priority) => {
  return { title, desc, date, priority };
}

const updatedTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

const displayTasks = () => {
  const temp = updatedTasks();
  const p = temp.map(task => {
    `
    <p>${task.name}</p>
    <p>${task.desc}</p>
    <p>${task.date}</p>
    <p>${task.priority}</p>
    `
  }).join('\n');
  document.querySelector('#tasks-container');
}

const addNewTask = () => {

}

const taskCreation = () => {
  taskBtn.addEventListener('click', () => {

  })
}