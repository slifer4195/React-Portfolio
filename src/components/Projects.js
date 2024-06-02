import React from 'react';
import './Projects.css';

function Projects() {
  // Sample project data (replace with your actual project data)
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4' }
  ];

  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='project-grid'>
        {projects.map(project => (
          <div key={project.id} className='project-item'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
