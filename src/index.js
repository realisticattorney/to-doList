index
import {
  displayProjects, projectCreation, addProjectsToSelection, openProjectModal,
} from './project';
import { taskCreation, openTaskModal } from './task';
import {
  filteringBtns, pastAction, todayAction, allAction, displayAll,
} from './filter';

window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify([{ name: 'Inbox' }]));
  }
  if (JSON.parse(localStorage.getItem('tasks')) === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  displayProjects();
  displayAll();
  addProjectsToSelection();
  projectCreation();
  taskCreation();
});


