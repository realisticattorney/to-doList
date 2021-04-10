const updatedTasks = () => {
  return JSON.parse(localStorage.getItem('tasks'));
}

const updateTasks = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(arr));
}

const updatedProjects = () => {
  return JSON.parse(localStorage.getItem('projects'));
}

const updateProjects = (arr) => {
  localStorage.setItem('projects', JSON.stringify(arr));
}

const validateInput = (id) => {
  if(id.value === null || id.value === "") {
    alert('Please fill the required fields');
    return true;
  }
}

export {
  updateProjects,
  updatedProjects,
  updateTasks,
  updatedTasks,
  validateInput
}