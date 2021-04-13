import { openEdit } from './task';

const updatedTasks = () => { JSON.parse(localStorage.getItem('tasks')); };

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const updatedProjects = () => { JSON.parse(localStorage.getItem('projects')); };

const updateProjects = (arr) => { localStorage.setItem('projects', JSON.stringify(arr)); };

const validateInput = (id) => {
  if (id.value === null || id.value === '') {
    alert('Please fill the required fields');
    return true;
  }
  return false;
};

const expandBtn = () => {
  const tasks = document.querySelectorAll('.singleTask');
  for (let i = 0; i < tasks.length; i += 1) {
    const hidden = document.createElement('span');
    hidden.innerText = 'visibility';
    hidden.classList.add('showTaskBtn', 'material-icons');
    tasks[i].appendChild(hidden);
  }
};

const expandAction = () => {
  const tasks = document.querySelectorAll('.singleTask');
  for (let i = 0; i < tasks.length; i += 1) {
    const hiddenBtns = document.querySelectorAll('.showTaskBtn');
    hiddenBtns[i].addEventListener('click', () => {
      const displayItems = tasks[i].nextElementSibling;
      if (displayItems.style.display === 'block') {
        hiddenBtns[i].innerText = 'visibility';
        hiddenBtns[i].classList.add('material-icons');
        displayItems.style.display = 'none';
      } else {
        hiddenBtns[i].innerText = 'visibility_off';
        hiddenBtns[i].classList.add('material-icons');
        displayItems.style.display = 'block';
      }
    });
  }
};

const editTask = () => {
  const tasks = document.querySelectorAll('.singleTask');
  for (let i = 0; i < tasks.length; i += 1) {
    const editBtn = document.createElement('span');
    editBtn.innerText = 'edit';
    editBtn.classList.add('material-icons', 'editTaskBtn');
    editBtn.addEventListener('click', () => {
      openEdit(i);
    });
    tasks[i].appendChild(editBtn);
  }
};

const displayArrOfTasks = (arr) => {
  const p = arr.map((task) => (
    `<div class='d-flex f-column taskWrapper'>
      <div class='singleTask d-flex'>
        <div>
            <h3>${task.name}</h3>
            <p>${task.date.slice(5)}</p>
        </div>
      </div>
      <div class='hiddenItems'>
        <p>${task.desc}</p>
        <p>${task.priority}</p>
        <p>${task.project}</p>
      </div>
    </div>`
  )).join('\n');
  document.querySelector('#tasks-container').innerHTML = p;
  editTask();
  expandBtn();
  expandAction();
};

export {
  updateProjects,
  updatedProjects,
  updateTasks,
  updatedTasks,
  validateInput,
  displayArrOfTasks,
};