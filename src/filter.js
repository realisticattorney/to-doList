import { updatedTasks, displayArrOfTasks } from './utils';

const date = new Date();

const displayAll = () => {
  const tasksArr = updatedTasks();
  displayArrOfTasks(tasksArr);
};

const allAction = () => {
  const allBtn = document.querySelector('#allBtn');
  allBtn.addEventListener('click', () => {
    displayAll();
  });
};

const displayPast = () => {
  const tasksArr = updatedTasks();
  const filteredArr = tasksArr.filter(
    (task) => task.date.slice(8) < date.getDate().toString()
    && task.date.slice(5, 7) < (date.getMonth() + 1).toString()
    || task.date.slice(0, 4) < date.getFullYear()
  );
  displayArrOfTasks(filteredArr);
};

const pastAction = () => {
  const pastBtn = document.querySelector('#pastBtn');
  pastBtn.addEventListener('click', () => {
    displayPast();
  });
};

const displayToday = () => {
  const tasksArr = updatedTasks();
  const filteredArr = tasksArr.filter(
    (task) => task.date.slice(8) === date.getDate().toString()
    && task.date.slice(5, 7) === (date.getMonth() + 1).toString()
  );
  displayArrOfTasks(filteredArr);
};

const todayAction = () => {
  const todayBtn = document.querySelector('#todayBtn');
  todayBtn.addEventListener('click', () => {
    displayToday();
  });
};

const displayFiltered = (arr) => {
  if (arr.length === 0) {
    document.querySelector('#tasks-container').innerHTML = '<h2>No tasks created</h2>';
    return;
  }
  displayArrOfTasks(arr);
};

const filteringBtns = () => {
  const projectBtns = document.querySelectorAll('.projectBtn');

  for (let i = 0; i < projectBtns.length; i += 1) {
    projectBtns[i].addEventListener('click', () => {
      const tasks = JSON.parse(localStorage.getItem('tasks'));

      const filteredTasks = tasks.filter((task) => {
        if (task.project === projectBtns[i].innerText) {
          return task;
        }
      });
      displayFiltered(filteredTasks);
    });
  }
};

export {
  displayAll,
  filteringBtns,
  todayAction,
  pastAction,
  allAction,
};
