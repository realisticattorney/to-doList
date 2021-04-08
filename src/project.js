const projectBtn = document.querySelector('#project-btn');
const projectName = document.querySelector('#new-project');

const createProject = (name) => {
  return { name };
}

const updatedProjects = () => {
  return JSON.parse(localStorage.getItem('projects'));
}

const updateProjects = (arr) => {
  localStorage.setItem('projects', JSON.stringify(arr));
}

const displayProjects = () => {
  const temp = updatedProjects();
  const p = temp.map(project => (
    `<p>${project.name}</p>`
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

const validateInput = (id) => {
  if(id.value === null || id.value === "") {
    alert('Please fill the required fields');
    return true;
  }
}

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