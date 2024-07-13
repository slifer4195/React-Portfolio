import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "L3Harris",
    position: "Associate Software Engineer",
    duration: "Jan 2024 - Present",
    description: `● Designed a RESTful API using Spring Boot to fetch and format data from a relational database into JSON data for integration with a Flask app<br>
                  ● Developed a Flask-based API to configure and manage settings for a file system application`,
    image: "/images/l3harris.png", // Example image path
  },
  {
    id: 2,
    company: "Trane Technologies",
    position: "Software Engineer Co-op",
    duration: "May 2022 - Dec 2022",
    description: `● Implemented dynamic log application that generates log file with only selected log type using threading<br>
                  ● Used MySQL to keep track of which log type is needed by the user and created API that would generate json file for the selected log type`,
    image: "/images/trane.png", // Example image path
  },
  {
    id: 3,
    company: "Texas A&M University",
    position: "Research Assistant",
    duration: "January 2022 - May 2022",
    description: `● Ordered data by the popularity of posts by having an importance level as entity for each post<br>
                  ● Built a web app using React and Spring boot that allows users to add data to a training dataset and track
                  data history.`,
    image: "/images/tamu.png", // Example image path
  }
  // Add more work experience entries as needed
];

function Experience() {
  return (
    <div className="experience-container" id='Experience'>
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
              <img src={experience.image} alt={`${experience.company} Image`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
