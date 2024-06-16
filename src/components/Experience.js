import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "L3Harris",
    position: "Associate Software Engineer",
    duration: "May 2018 - Present",
    description: "Responsible for developing web applications using React and Node.js.",
    image: "/images/l3harris3.png", // Example image path
  },
  {
    id: 2,
    company: "Trane Technologies",
    position: "Software Engineer Co-op",
    duration: "January 2015 - April 2018",
    description: "Worked on UI/UX design and implementation for various client projects.",
    image: "/images/trane.png", // Example image path
  },
  {
    id: 3,
    company: "Texas A&M University",
    position: "Research Assistant",
    duration: "January 2015 - April 2018",
    description: "Worked on UI/UX design and implementation for various client projects.",
    image: "/images/tamu.png", // Example image path
  }
  // Add more work experience entries as needed
];

function Experience() {
  return (
    <div className="experience-container">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-details">
              <h3>{experience.company}</h3>
              <p>{experience.position}</p>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
            <div className="experience-image">
              <img src={experience.image} alt={`${experience.company} Image`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
