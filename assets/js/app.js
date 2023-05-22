function toggleProject(projectIndex) {

  // Get the project info elements
  const projectInfoElements = document.querySelectorAll('.project-info');

  // Hide all project info elements
  projectInfoElements.forEach(element => {
    element.style.display = 'none';
  });

  // Show the project info element corresponding to the clicked project
  const clickedProjectInfo = document.querySelector('#project-info-' + (projectIndex + 1));
  clickedProjectInfo.style.display = 'block';
}


