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
    `<div class='singleTask'>
      <h3>${task.name}</h3>
      <p>${task.desc}</p>
      <p>${task.priority}</p>
      <p>${task.date}</p>
      <button type='button' onClick='deleteTask(${index})'>Delete</button>
    </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
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

const editTask = () => {
  const task = document.querySelectorAll('.singleTask');
  
  for(let i = 0; i < task.length; i += 1){
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.type = 'button';
    editBtn.addEventListener('click', () => {
      openEdit(i);
    });
    task[i].appendChild(editBtn);
  }
}

const openEdit = (id) => {
  const temp = updatedTasks();

  const contentDiv = document.querySelector('#content');

  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal');
  modalWrapper.id = 'taskModal';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerText = 'X';

  const taskNameInput = document.createElement('input');
  taskNameInput.value = temp[id].name;

  const taskDescInput = document.createElement('input');
  taskDescInput.value = temp[id].desc;

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.value = temp[id].date;

  const taskPriorityInput = document.createElement('select');

  const taskProjectInput = document.createElement('select');

  modalContent.appendChild(taskDateInput);
  modalContent.appendChild(taskDescInput);
  modalContent.appendChild(taskName);
  
  modalContent.appendChild(closeBtn);
  modalWrapper.appendChild(modalContent);
  contentDiv.appendChild(modalWrapper);

  const openModal = document.querySelector('.modal');
  openModal.style.display = 'block';

  closeBtn.onclick = () => {
    openModal.style.display = 'none';
    modalWrapper.remove()
  }
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