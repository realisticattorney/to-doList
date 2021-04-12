import {
  updatedTasks, updatedProjects, updateTasks, validateInput,
} from './utils';
import { displayAll } from './filter';

const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

const createTask = (name, desc, date, priority, project) => { name, desc, date, priority, project };

const addNewTask = (name, desc, date, priority, project) => {
  const item = createTask(name, desc, date, priority, project);
  const temp = updatedTasks();
  temp.push(item);
  updateTasks(temp);
  taskName.value = '';
  taskDesc.value = '';
  taskDate.value = '';
  taskPriority.value = '';
};

const deleteTask = (id) => {
  const tasksArr = updatedTasks();
  tasksArr.splice(id, 1);
  updateTasks(tasksArr);
  displayAll();
};

const openTaskModal = () => {
  const button = document.querySelector('#openTaskModal');
  const modal = document.querySelector('.taskModal');
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  const close = document.querySelector('.closeTask');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

const saveTask = (id) => {
  const editingName = document.querySelector('#editingName');
  const editingDesc = document.querySelector('#editingDesc');
  const editingDate = document.querySelector('#editingDate');
  const editingPriority = document.querySelector('#editingPriority');
  const editingProject = document.querySelector('#editingProject');

  const editedTask = createTask(
    editingName.value, editingDesc.value, editingDate.value, editingPriority.value, editingProject.value
  );
  const tempTasks = updatedTasks();
  tempTasks[id] = editedTask;
  updateTasks(tempTasks);
  displayAll();
};

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
  for (let i = 0; i < tempProjects.length; i += 1) {
    const projectOption = document.createElement('option');
    projectOption.innerText = tempProjects[i].name;
    taskProjectInput.append(projectOption);
  }
  taskProjectInput.value = tempTasks[id].project;
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
    modalWrapper.remove();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.innerText = 'Delete';
  modalContent.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', () => {
    deleteTask(id);
    modalWrapper.remove();
  });

  const saveBtn = document.createElement('button');
  saveBtn.type = 'button';
  saveBtn.innerText = 'Save';
  modalContent.appendChild(saveBtn);
  saveBtn.addEventListener('click', () => {
    saveTask(id);
    modalWrapper.remove();
  });
};

const taskCreation = () => {
  taskBtn.addEventListener('click', () => {
    if (!validateInput(taskName)) {
      addNewTask(
        taskName.value, taskDesc.value, taskDate.value, taskPriority.value, taskProject.value
      );
      displayAll();
    }
  });
};

export {
  taskCreation,
  openTaskModal,
  openEdit,
};