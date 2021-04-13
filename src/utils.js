const updatedTasks = () => JSON.parse(localStorage.getItem('tasks'));

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const updatedProjects = () => JSON.parse(localStorage.getItem('projects'));

const updateProjects = (arr) => localStorage.setItem('projects', JSON.stringify(arr));

const validateInput = (id) => {
  if (id.value === null || id.value === '') {
    alert('Please fill the required fields');
    return true;
  }
  return false;
};

const saveTask = (id) => {
  const editingName = document.querySelector('#editingName');
  const editingDesc = document.querySelector('#editingDesc');
  const editingDate = document.querySelector('#editingDate');
  const editingPriority = document.querySelector('#editingPriority');
  const editingProject = document.querySelector('#editingProject');

  const editedTask = createTask(
    editingName.value, editingDesc.value,
    editingDate.value, editingPriority.value, editingProject.value,
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