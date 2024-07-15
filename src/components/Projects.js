import React from 'react';
import './Projects.css';

function Projects() {

  return (
   <>
     <section className="sub-section-alternative" id="projects">
            <h1 className='title'>Projects</h1>
            <br/>
            <br/>
            <div className="project-container">
                <div className="project-card">
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/images/project1.png`} alt="Project One"/>
                    <h3>Language Tutor chatbot</h3>
                    <p className="subtext2">Korean language tutor that teach the user Korean language by engaging in a 
                        friendly conversation with the user.
                    </p>
                    <hr/>
                    <p className="subtext"><a className="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/chatbotProject">View here</a></p>
                </div>
                <div className="project-card">
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/images/project2.png`} alt="Project Two"/>
                    <h3>Pokemon Tutorial website</h3>
                    <p className="subtext2">This website recommends which type of move user should use depending on type
                        of the opponenet pokemons. 
                    </p>
                    <hr/>
                    <p className="subtext"><a className="project-link" target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/poke">View here</a></p>
                </div>
                <div className="project-card">
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/images/project3.png`} alt="Project Three"/>
                    <h3>Denoising Image</h3>
                    <p className="subtext2">Neural network program denoise images with multiple U-net models by combining
                    results of multiple models.
                    </p>
                    <hr/>
                    <p className="subtext"><a className="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/Denoising-p1">View here</a></p>
                </div>
                <div className="project-card">
                    <img className="project-image" src={`${process.env.PUBLIC_URL}/images/project4.png`} alt="Project Four"/>
                    <h3>Image Manipulation</h3>
                    <p className="subtext2">Implementation of rescaling and resizing input image using dynamic arrays with C++ mempy
                    </p>
                    <hr/>
                    <p className="subtext"><a className="project-link"  target="_blank" 
                        rel="noopener noreferrer" href="https://github.com/slifer4195/imageManipulation">View here</a></p>
                </div>
            </div>
        </section>
      </>
  );
}

export default Projects;
