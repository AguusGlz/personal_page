import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Agustín Galarza</h3>
            <p>
              Full Stack Developer passionate about creating innovative 
              solutions and exceptional digital experiences.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <p>📧 agustin.galarza96@gmail.com</p>
              <p>📱 +54 9 11 2818-0784</p>
              <p>📍 Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/agustin-galarza/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
              <a href="https://github.com/AguusGlz" target="_blank" rel="noopener noreferrer" className="footer-social-link">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Agustín Galarza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 