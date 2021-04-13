index
import {
  displayProjects, projectCreation, addProjectsToSelection, openProjectModal,
} from './project';
import { taskCreation, openTaskModal } from './task';
import {
  filteringBtns, pastAction, todayAction, allAction, displayAll,
} from './filter';


projectCreation();


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify(new Array));
  }
  
  displayProjects();
})



