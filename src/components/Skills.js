import React, { useEffect, useRef } from 'react';
import './Skills.css';

function Skills() {
  const skillsRef = useRef([]);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        const skill = entry.target;
        if (entry.isIntersecting) {
          skill.style.width = skill.getAttribute('data-skill');
        } else {
          skill.style.width = '0%'; // Reset width when out of view
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Adjust as needed
    });

    skillsRef.current.forEach(skill => {
      if (skill) observer.observe(skill);
    });

    return () => {
      skillsRef.current.forEach(skill => {
        if (skill) observer.unobserve(skill);
      });
    };
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-header">Languages</h2>
      <div className="skill-item">
        <p className="skill-text">C++</p>
        <div className="container">
          <div className="skills html" data-skill="85%" ref={el => skillsRef.current[0] = el}>85%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">Python</p>
        <div className="container">
          <div className="skills css" data-skill="90%" ref={el => skillsRef.current[1] = el}>90%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">JavaScript</p>
        <div className="container">
          <div className="skills js" data-skill="75%" ref={el => skillsRef.current[2] = el}>75%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">Matlab</p>
        <div className="container">
          <div className="skills php" data-skill="60%" ref={el => skillsRef.current[3] = el}>60%</div>
        </div>
      </div>
      <div className="skill-item">
        <p className="skill-text">Java</p>
        <div className="container">
          <div className="skills matlab" data-skill="80%" ref={el => skillsRef.current[4] = el}>80%</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
