const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

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
    `<h3 class=''>${task.name}</h3>
    <input class='' value=${task.name}>
    <p class=''>${task.desc}</p>
    <input class='' value=${task.desc}>
    <p class=''>${task.priority}</p>
    <input class='' value=${task.priority}>
    <p class=''>${task.date}</p>
    <input class='' type='date' value=${task.date}>
    <button class='' type='button'>Edit</button>
    <button class='' type='button'>Save</button>
    <button class='' type='button' onClick='deleteTask(${index})'>Delete</button>`
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