const updatedTasks = () => JSON.parse(localStorage.getItem('tasks'));

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const updatedProjects = () => JSON.parse(localStorage.getItem('projects'));

const updateProjects = (arr) => localStorage.setItem('projects', JSON.stringify(arr));

const validateInput = (id) => {
  if (id.value === null || id.value === '') {
    return true;
  }
  return false;
};

export {
  updateProjects,
  updatedProjects,
  updateTasks,
  updatedTasks,
  validateInput,
};