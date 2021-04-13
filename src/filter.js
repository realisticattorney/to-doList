import { updatedTasks } from './utils';
import { displayArrOfTasks } from './task';

const date = new Date();

/* eslint-disable */
const displayAll = () => {
  const tasksArr = updatedTasks();
  displayArrOfTasks(tasksArr);
};

const allAction = () => {
  const allBtn = document.querySelector('#allBtn');
  allBtn.addEventListener('click', () => displayAll());
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
    (task) => (task.date.slice(8) === date.getDate().toString()
    && task.date.slice(5, 7) === (date.getMonth() + 1).toString())
  );
  displayArrOfTasks(filteredArr);
};
/* eslint-enable  */
