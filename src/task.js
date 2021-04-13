import {
  updatedTasks, updatedProjects, updateTasks, validateInput,
} from './utils';

const taskName = document.querySelector('#task-name');
const taskDesc = document.querySelector('#task-desc');
const taskDate = document.querySelector('#task-date');
const taskPriority = document.querySelector('#task-priority');
const taskProject = document.querySelector('#task-project');
const taskBtn = document.querySelector('#task-btn');

const createTask = (name, desc, date, priority, project) => ({
  name, desc, date, priority, project,
});

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
