import { updatedTasks, updatedProjects, updateTasks, validateInput } from './utils';

const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

const createTask = (name, desc, date, priority, project) => {
  return { name, desc, date, priority, project };
}

const displayTasks = () => {
  const temp = updatedTasks();
  const p = temp.map((task, index) => (
    `<div class='singleTask'>
      <h3>${task.name}</h3>
      <p>${task.desc}</p>
      <p>${task.priority}</p>
      <p>${task.date}</p>
      <p>${task.project}</p>
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
const deleteTask = (id) => {
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
  const tempTasks = updatedTasks();
  const tempProjects = updatedProjects();

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
  taskNameInput.value = tempTasks[id].name;
  taskNameInput.id = 'editingName';

  const taskDescInput = document.createElement('input');
  taskDescInput.value = tempTasks[id].desc;
  taskDescInput.id = 'editingDesc';

  const taskDateInput = document.createElement('input');
  taskDateInput.type = 'date';
  taskDateInput.value = tempTasks[id].date;
  taskDateInput.id = 'editingDate';

  const taskPriorityInput = document.createElement('select');
  const optionOne = document.createElement('option');
  optionOne.innerText = 'Normal';
  const optionTwo = document.createElement('option');
  optionTwo.innerText = 'Urgent';
  const optionThree = document.createElement('option');
  optionThree.innerText = 'Later';
  taskPriorityInput.append(optionOne, optionTwo, optionThree);
  taskPriorityInput.value = tempTasks[id].priority;
  taskPriorityInput.id = 'editingPriority';

  const taskProjectInput = document.createElement('select');
  for(let i = 0; i < tempProjects.length; i += 1) {
    const projectOption = document.createElement('option');
    projectOption.innerText = tempProjects[i].name;
    taskProjectInput.append(projectOption)
  }
  taskProjectInput.value = tempTasks[id].project
  taskProjectInput.id = 'editingProject';

  modalContent.appendChild(taskProjectInput);
  modalContent.appendChild(taskPriorityInput);
  modalContent.appendChild(taskDateInput);
  modalContent.appendChild(taskDescInput);
  modalContent.appendChild(taskNameInput);

  modalContent.appendChild(closeBtn);
  modalWrapper.appendChild(modalContent);
  contentDiv.appendChild(modalWrapper);

  const openModal = document.querySelector('.modal');
  openModal.style.display = 'block';

  closeBtn.onclick = () => {
    openModal.style.display = 'none';
    modalWrapper.remove()
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.innerText = 'Delete';
  modalContent.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', () => {
    deleteTask(id);
    modalWrapper.remove()
  })

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.innerText = 'Save';
  modalContent.appendChild(saveBtn);
  saveBtn.addEventListener('click', () => {
    saveTask(id);
    modalWrapper.remove(); 
  })
}

const saveTask = (id) => {
  const editingName = document.querySelector('#editingName');
  const editingDesc = document.querySelector('#editingDesc');
  const editingDate = document.querySelector('#editingDate');
  const editingPriority = document.querySelector('#editingPriority');
  const editingProject = document.querySelector('#editingProject');

  const editedTask = createTask(editingName.value, editingDesc.value, editingDate.value, editingPriority.value, editingProject.value);
  const tempTasks = updatedTasks();
  tempTasks[id] = editedTask;
  updateTasks(tempTasks);
  displayTasks();
}



const taskCreation = () => {
  taskBtn.addEventListener('click', () => {
    if (!validateInput(taskName)) {
      addNewTask(taskName.value, taskDesc.value, taskDate.value, taskPriority.value, taskProject.value);
      displayTasks()
    }
  })
}

export {
  taskCreation,
  displayTasks,
};