import { displayProjects, projectCreation } from './project';

projectCreation();


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify(new Array));
  }
  
  displayProjects();
})



