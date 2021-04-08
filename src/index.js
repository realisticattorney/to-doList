import { displayProjects, projectCreation } from './project';
import { taskCreation, displayTasks } from './task'

projectCreation();
taskCreation();

window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify(new Array));
  }
  if(JSON.parse(localStorage.getItem('tasks')) === null) {
    localStorage.setItem('tasks', JSON.stringify(new Array));
  }
  
  displayProjects();
  displayTasks();
})

