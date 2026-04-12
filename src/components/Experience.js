import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "Lockheed Martin",
    position: "Software Engineer",
    duration: "03/2025 ~ Present",
    description: `● Developed a Python API wrapper for Opal Kelly FrontPanel SDK, enabling automated hardware testing and verification scripts<br>
                  ● Built Python ETL pipeline to parse CSV data and insert records into SQLite database using csv and sqlite3 libraries<br>
                 `,
    image: "/images/lockheed.png",
  },
  {
    id: 2,
    company: "L3Harris",
    position: "Software Engineer",
    duration: "01/2024 ~ 03/2025",
    description: `● Built multithreaded SCP-based file transfer system using Spring Boot REST APIs, React frontend, and PostgreSQL, enabling 20+ users to simultaneously transfer hundreds of files across servers<br>
                  ● Built a C++ Qt GUI application enabling users to upload and filter log files by type, streamlining log analysis and debugging workflows`,
    image: "/images/l3harris.png",
  },
  {
    id: 3,
    company: "Trane Technologies",
    position: "Software Engineer Co-op",
    duration: "05/2022 ~ 12/2022",
    description: `● Developed React and Flask web application for dataset management, supporting CSV uploads of 10,000+ log records, data history tracking, and automated outlier logging for review<br>
                  ● Authored RSpec unit tests validating equipment efficiency and unit conversion methods including temperature, pressure, and energy for internal company tooling`,
    image: "/images/trane.png",
  },
  {
    id: 4,
    company: "Texas A&M University",
    position: "Research Assistant",
    duration: "01/2022 ~ 05/2022",
    description: `● Ordered data by the popularity of posts by having an importance level as entity for each post<br>
                  ● Built a web app using React and Spring Boot that allows users to add data to a training dataset and track data history.`,
    image: "/images/tamu.png",
  }
];

function Experience() {
  return (
    <div className="experience-container" id='experience'>
      <br />
      <h1>Work Experience</h1>
      <br />
      <br />
      <div className="experience-list">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-details">
              <h2 className="company">{experience.company}</h2>
              <div className="pos-duration">
                <p className="pos">{experience.position}</p>
                <p>{experience.duration}</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
            </div>
            <div className="experience-image">
              <img src={`${process.env.PUBLIC_URL}/${experience.image}`} alt={`${experience.company}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;