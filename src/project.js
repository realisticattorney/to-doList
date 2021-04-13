const projectBtn = document.querySelector('#project-btn');
const projectName = document.querySelector('#new-project');

const createProject = (name) => ({ name });

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
      displayProjects()
    }
  });
}

const projectTags = document.querySelector('p')

for(let pTags in projectTags) {
  const delBtn = docum
}


module.exports = {
  displayProjects,
  projectCreation
}