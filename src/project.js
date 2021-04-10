import { filteringBtns } from './filter';
import { updateProjects, updatedProjects, validateInput } from './utils';

const projectBtn = document.querySelector('#project-btn');
const projectName = document.querySelector('#new-project');

const createProject = (name) => {
  return { name };
}

const displayProjects = () => {
  const temp = updatedProjects();
  const p = temp.map(project => (
    `<button class='projectBtn' >${project.name}</button>`
  )).join('\n');
  document.querySelector('#projects-container').innerHTML = p;
}

const addNewProject = (name) => {
  const item = createProject(name);
  const temp = updatedProjects();
  temp.push(item);
  updateProjects(temp);
  projectName.value = "";
}

const addProjectsToSelection = () => {
  const temp = JSON.parse(localStorage.getItem('projects'));
  const selectProject = document.querySelector('#task-project')
  const mappingProjects = temp.map(project => (
    `<option id='${project.name}'>${project.name}</option>`
  ))
  selectProject.innerHTML = mappingProjects;
}

const projectCreation = () => {
  projectBtn.addEventListener('click', () => {
    if (!validateInput(projectName)) {
      addNewProject(projectName.value);
      displayProjects()
      addProjectsToSelection()
      filteringBtns()
    }
  });
}

export {
  displayProjects,
  projectCreation,
  updatedProjects,
  addProjectsToSelection,
};