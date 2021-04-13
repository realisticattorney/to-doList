import { updatedTasks } from './utils';
import { displayArrOfTasks } from './task';

const date = new Date();

/* eslint-disable */
const displayAll = () => {
  const tasksArr = updatedTasks();
  displayArrOfTasks(tasksArr);
};