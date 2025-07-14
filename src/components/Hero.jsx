import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Agustín Galarza</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineer at Mercado Libre with 5+ years of experience in Java, Go, Spring Boot, React and Angular. 
              Passionate about backend development, cloud technologies and scalable architectures.
            </p>
            <div className="hero-buttons">
              <a href="#experience" className="btn btn-primary">
                View Experience
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-container">
              <img 
                src="/my-photo.webp" 
                alt="Agustín Galarza with his cat" 
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 