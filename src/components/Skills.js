import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <div className="skill-item">
        <p className="skill-text">HTML</p>
        <div className="container">
          <div className="skills html">90%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">CSS</p>
        <div className="container">
          <div className="skills css">80%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">JavaScript</p>
        <div className="container">
          <div className="skills js">65%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">PHP</p>
        <div className="container">
          <div className="skills php">60%</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
