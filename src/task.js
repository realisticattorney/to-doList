const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskBtn = document.querySelector('#task-btn');

const createTask = (name, desc, date, priority) => {
  return { name, desc, date, priority };
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
    `<p>${task.name}</p>
    <p>${task.desc}</p>
    <p>${task.date}</p>
    <p>${task.priority}</p>
    <button type='button' onClick='deleteTask(${index})'>Delete</button>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
}

const addNewTask = (name, desc, date, priority) => {
  const item = createTask(name, desc, date, priority);
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
      addNewTask(taskName.value, taskDesc.value, taskDate.value, taskPriority.value);
      displayTasks()
    }
  })
}

module.exports = {
  taskCreation,
  displayTasks,

};