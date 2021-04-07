import { displayProjects, projectCreation } from './project';

projectCreation();


window.addEventListener('load', () => {

  if(JSON.parse(localStorage.getItem('projects')) === null) {
    localStorage.setItem('projects', JSON.stringify(new Array));
  }
  
  displayProjects();
})


// Tasks creation

const Tasks = (title, desc, date, priority) => {


  return { title, desc, date, priority }
}

// let firstTask = new Task("create prototype", "a bunch of properties into a function constructor", Date.now(), 1 );
