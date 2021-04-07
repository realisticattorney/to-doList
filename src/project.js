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



  projectBtn.addEventListener('click', () => {
    if (!validateInput(projectName)) {
      addNewProject(projectName.value);
      displayProjects()
    }
  });
}


export default { projectCreation, displayProjects };