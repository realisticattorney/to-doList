import { filteringBtns } from './filter';
import { updateProjects, updatedProjects, validateInput } from './utils';

const projectBtn = document.querySelector('#project-btn');
const projectName = document.querySelector('#new-project');

const createProject = (name) => name;

const displayProjects = () => {
  const arr = updatedProjects();
  const p = arr.map((project) => (
    `<button class='projectBtn' >${project.name}</button>`
  )).join('\n');
  document.querySelector('#projects-container').innerHTML = p;
};

const addNewProject = (name) => {
  const item = createProject(name);
  const arr = updatedProjects();
  arr.push(item);
  updateProjects(arr);
  projectName.value = '';
};

const addProjectsToSelection = () => {
  const arr = updatedProjects();
  const selectProject = document.querySelector('#task-project');
  const mappingProjects = arr.map((project) => (
    `<option id='${project.name}'>${project.name}</option>`
  ));
  selectProject.innerHTML = mappingProjects;
};

const projectCreation = () => {
  projectBtn.addEventListener('click', () => {
    if (!validateInput(projectName)) {
      addNewProject(projectName.value);
      displayProjects();
      addProjectsToSelection();
      filteringBtns();
    }
  });
};

const openProjectModal = () => {
  const button = document.querySelector('#openProjectModal');
  const modal = document.querySelector('.projectModal');
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  const close = document.querySelector('.closeProject');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export {
  displayProjects,
  projectCreation,
  updatedProjects,
  addProjectsToSelection,
  openProjectModal,
};