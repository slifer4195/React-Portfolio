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
   <>
     <section class="sub-section-alternative" id="projects">
            <h1 className='title'>Projects</h1>
            <br/>
            <br/>
            <div class="project-container">
                <div class="project-card">
                    <img class="project-image" src="images/project1.png" alt="Project One Image"/>
                    <h3>Language Tutor chatbot</h3>
                    <p class="subtext2">Korean language tutor that teach the user Korean language by engaging in a 
                        friendly conversation with the user.
                    </p>
                    <hr/>
                    <p class="subtext"><a class="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/chatbotProject">View here</a></p>
                </div>
                <div class="project-card">
                    <img class="project-image" src="images/project2.png" alt="Project One Image"/>
                    <h3>Pokemon Tutorial website</h3>
                    <p class="subtext2">This website recommends which type of move user should use depending on type
                        of the opponenet pokemons. 
                    </p>
                    <hr/>
                    <p class="subtext"><a class="project-link" target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/poke">View here</a></p>
                </div>
                <div class="project-card">
                    <img class="project-image" src="images/project3.png" alt="Project One Image"/>
                    <h3>Denoising Image</h3>
                    <p class="subtext2">Neural network program denoise images with multiple U-net models by combining
                    results of multiple models.
                    </p>
                    <hr/>
                    <p class="subtext"><a class="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/Denoising-p1">View here</a></p>
                </div>
                <div class="project-card">
                    <img class="project-image" src="images/project4.png" alt="Project One Image"/>
                    <h3>Image Manipulation</h3>
                    <p class="subtext2">Implementation of rescaling and resizing input image using dynamic arrays with C++ mempy
                    </p>
                    <hr/>
                    <p class="subtext"><a class="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/imageManipulation">View here</a></p>
                </div>
                
            </div>
        </section>
      </>
  );
}

export default Projects;
