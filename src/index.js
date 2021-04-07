

// function Task(name) {
//   this.title = title;
//   this.description = description;
//   this.dueDate = dueDate;
//   this.priority = priority;
// }

import { update } from "lodash";

import projectCreation from './project';
import displayProjects from './project'

projectCreation();
// let firstTask = new Task("create prototype", "a bunch of properties into a function constructor", Date.now(), 1 );


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