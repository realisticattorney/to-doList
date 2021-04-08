import { displayProjects, projectCreation, addProjectsToSelection } from './project';
import { taskCreation, displayTasks } from './task'


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify([{name: 'Inbox'}]));
  }
  if(JSON.parse(localStorage.getItem('tasks')) === null) {
    localStorage.setItem('tasks', JSON.stringify(new Array));
  }
  
  displayProjects();
  displayTasks();
  addProjectsToSelection();
  projectCreation();
  taskCreation();

})

