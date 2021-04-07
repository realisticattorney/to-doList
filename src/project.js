const projectCreation = () => {
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



  projectBtn.addEventListener('click', () => {
    if (!validateInput(projectName)) {
      addNewProject(projectName.value);
      displayProjects()
    }
  });
}


export default { projectCreation, displayProjects };