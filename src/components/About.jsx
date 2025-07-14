import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Hello, I'm Agustín Galarza, a programmer with a degree from UnLAM. I consider myself a motivated individual passionate about the world of technology. I enjoy constant learning, both within and outside of my job.
            </p>
            <p className="about-description">
              Collaboration is crucial to me. I enjoy working alongside my colleagues, fostering a friendly and cohesive team environment. I find satisfaction in coordinating and leading teams, analyzing tasks, and contributing in areas beyond development when necessary.
            </p>
            <p className="about-description">
              I aim to work as a developer in companies that adhere to good practices such as documentation, quality controls, code reviews, among others. I am a committed individual who strives to improve the processes of various solutions.
            </p>
            <p className="about-description">
              I am proactive in seeking information and sharing it with my team when needed, fostering knowledge for better outcomes.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years of experience</p>
              </div>
              <div className="stat">
                <h3>4</h3>
                <p>Companies worked</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 