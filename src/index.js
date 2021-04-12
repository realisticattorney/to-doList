import { displayProjects, projectCreation, addProjectsToSelection, openProjectModal } from './project';
import { taskCreation, displayTasks, openTaskModal } from './task';
import { filteringBtns, pastAction, todayAction, allAction } from './filter';

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
  filteringBtns();
  openProjectModal();
  openTaskModal();
  pastAction();
  todayAction();
  allAction();
})
