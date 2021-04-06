import sideNavbar from './sidenav';

sideNavbar();


//proyotype of tasks
function Task(name) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}



// Only change code above this line
let firstTask = new Task("create prototype", "a bunch of properties into a function constructor", Date.now(), 1 );

