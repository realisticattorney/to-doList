const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

// window.addEventListener('load', () => {
//   taskName = document.querySelector('#task-name');
//   taskDesc = document.querySelector('#task-desc');
//   taskDate = document.querySelector('#task-date');
//   taskPriority = document.querySelector('#task-priority');
//   taskProject = document.querySelector('#task-project');
//   taskBtn = document.querySelector('#task-btn');
//   editBtn = document.querySelector('#edit-btn');
// })
const createTask = (name, desc, date, priority, project) => {
  return { name, desc, date, priority, project };
}

const updatedTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

const displayTasks = () => {
  const temp = updatedTasks();
  const p = temp.map((task, index) => (
    `<div class='singleTask'>
      <h3>${task.name}</h3>
      <input class='task-input editing' value=${task.name}>
      <p>${task.desc}</p>
      <input class='task-input editing' value=${task.desc}>
      <p>${task.priority}</p>
      <input class='task-input editing' value=${task.priority}>
      <p>${task.date}</p>
      <input class='task-input editing' type='date' value=${task.date}>

      <button id='edit-btn' type='button' onClick='editTask()'>Edit</button>
      
      <button class='task-input editing' type='button'>Save</button>

      <button class='task-input editing' type='button' onClick='deleteTask(${index})'>Delete</button>
    </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
}

const addNewTask = (name, desc, date, priority, project) => {
  const item = createTask(name, desc, date, priority, project);
  const temp = updatedTasks();
  temp.push(item);
  updateTasks(temp);
  taskName.value = "";
  taskDesc.value = "";
  taskDate.value = "";
  taskPriority.value = "";
}

// Defining this function as a global function
window.deleteTask = deleteTask = (id) => {
  const temp = updatedTasks();
  temp.splice(id, 1);
  updateTasks(temp);
  displayTasks();
}

window.editTask = editTask = () => {
  // const taskInput = document.querySelectorAll('.task-input');
  // const editBtn = document.querySelector('#edit-btn');
  // if(editBtn.innerText === 'Edit') {
  //   editBtn.innerText = 'Cancel'
  // } else {
  //   editBtn.innerText = 'Edit'
  // }
  // for(let i = 0; i < taskInput.length; i += 1){
  //   taskInput[i].classList.toggle('editing');
  // }
}

window.saveTask = saveTask = () => {

}

const validateInput = (id) => {
  if(id.value === null || id.value === "") {
    alert('Please fill the required fields');
    return true;
  }
}

const taskCreation = () => {
  taskBtn.addEventListener('click', () => {
    if (!validateInput(taskName)) {
      addNewTask(taskName.value, taskDesc.value, taskDate.value, taskPriority.value, taskProject.value);
      displayTasks()
    }
  })
}

module.exports = {
  taskCreation,
  displayTasks,
};