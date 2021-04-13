import {
  updatedTasks, updateTasks, validateInput,
} from './utils';
import { displayAll } from './filter';

const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

const createTask = (name, desc, date, priority, project) => {
  return {
    name,
    desc,
    date,
    priority,
    project,
  };
};

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

const taskCreation = () => {
  taskBtn.addEventListener('click', () => {
    if (!validateInput(taskName)) {
      addNewTask(
        taskName.value, taskDesc.value, taskDate.value, taskPriority.value, taskProject.value,
      );
      displayAll();
    }
  });
};

export {
  taskCreation,
  openTaskModal,
};