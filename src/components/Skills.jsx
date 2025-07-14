import React from 'react'
import './Skills.css'
import { 
  SiOpenjdk, 
  SiGo, 
  SiSpring, 
  SiReact, 
  SiAngular, 
  SiJavascript, 
  SiTypescript, 
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPython,
  SiHtml5,
  SiCss3,
  SiOracle
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: SiOpenjdk },
    { name: 'Go', icon: SiGo },
    { name: 'Spring Boot', icon: SiSpring },
    { name: 'React', icon: SiReact },
    { name: 'Angular', icon: SiAngular },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'GCP', icon: SiGooglecloud },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-content">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">
                  <skill.icon size={40} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
          <div className="skills-text">
            <h3>My Competencies</h3>
            <p>
              I have solid experience in Full Stack web development, with expertise in Java and Go for backend development, and modern JavaScript frameworks like React and Angular for frontend.
            </p>
            <ul className="skills-list">
              <li>Backend: Java, Go, Spring Boot, Fury Framework, JUnit, Mockito</li>
              <li>Frontend: React, Angular, JavaScript, TypeScript, HTML, CSS</li>
              <li>Databases: PostgreSQL, MySQL, MongoDB, SQLite, Google BigQuery</li>
              <li>Cloud & DevOps: GCP, Architecture Design</li>
              <li>Others: Python, API Development, Swagger Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 