import React, { useRef, useEffect } from 'react'
import './Experience.css'

const Experience = () => {
  const itemRefs = useRef([])

  useEffect(() => {
    // Función para obtener la altura exacta del header-content
    const getHeaderContentHeight = () => {
      const header = document.querySelector('.header')
      if (header) {
        return header.offsetHeight
      }
      // Fallback si no encuentra el header
      return window.innerWidth <= 768 ? 60 : 80
    }

    let observer

    const createObserver = () => {
      if (observer) {
        observer.disconnect()
      }

      const headerHeight = getHeaderContentHeight()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              entry.target.classList.remove('animate-out')
            } else {
              entry.target.classList.add('animate-out')
              entry.target.classList.remove('animate-in')
            }
          })
        },
        {
          threshold: 0.1, // Más sensible para detección precisa
          rootMargin: `-${headerHeight}px 0px -100px 0px` // Exactamente la altura del header
        }
      )

      itemRefs.current.forEach((item) => {
        if (item) observer.observe(item)
      })
    }

    // Crear observer inicial
    createObserver()

    // Recrear observer cuando cambie el tamaño de ventana
    const handleResize = () => {
      createObserver()
    }

    // Recrear observer después de que se cargue la página completamente
    const handleLoad = () => {
      createObserver()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleLoad)

    return () => {
      if (observer) {
        observer.disconnect()
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Mercado Libre, Argentina',
      period: 'Jun. 2024 - Present',
      description: 'Backend development using Go and modern cloud technologies. Working with GCP services, BigQuery for data analytics, and React.js for frontend integration.',
      achievements: [
        'Backend development with Go',
        'Working with Fury (internal framework)',
        'GCP cloud services implementation',
        'Google BigQuery data processing',
        'Hybrid work environment'
      ],
      technologies: ['Go', 'Fury', 'GCP', 'Google BigQuery', 'React.js']
    },
    {
      title: 'Full Stack Developer',
      company: 'Almundo, Argentina',
      period: 'Jun. 2023 - May 2024',
      description: 'Web development with Angular and creation and maintenance of API endpoints with Spring Boot. Architecture design and Java/Spring Boot version migration.',
      achievements: [
        'Web development with Angular',
        'Creation and maintenance of API endpoints with Spring Boot',
        'Architecture design',
        'Java and Spring Boot version migration',
        'Unit testing with JUnit'
      ],
      technologies: ['Java', 'Spring Boot', 'JUnit', 'JavaScript', 'TypeScript', 'Angular', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'Zentricx, Argentina',
      period: 'Aug. 2022 - Jun. 2023',
      description: 'Web development with React and API development with Spring Boot. Architecture design and deployment of components in GCP.',
      achievements: [
        'Web development with React',
        'Creation and maintenance of API endpoints with Spring Boot',
        'Architecture design',
        'Deploy and creation of components in GCP',
        'Implementation and research of new technologies',
        'Unit test with JUnit'
      ],
      technologies: ['Java', 'Spring Boot', 'JUnit', 'JavaScript', 'TypeScript', 'React', 'Python', 'GCP', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Baufest, Argentina',
      period: 'Feb. 2021 - Aug. 2022',
      description: 'Web development with React and API endpoints with Spring Boot. MySQL database design and documentation work with Swagger.',
      achievements: [
        'Web development with React',
        'Creation and maintenance of API endpoints with Spring Boot',
        'MySQL database design and creation',
        'Documentation work with Swagger',
        'Unit Test with JUnit'
      ],
      technologies: ['Java', 'Spring Boot', 'JUnit', 'JavaScript', 'TypeScript', 'React.js', 'MySQL']
    },
    {
      title: 'Back End Developer',
      company: 'BP4, Argentina',
      period: 'Oct. 2019 - Feb. 2021',
      description: 'Creation and maintenance of API endpoints with Spring Boot. Incident resolution and code maintenance with documentation.',
      achievements: [
        'Creation and maintenance of API endpoints with Spring Boot',
        'Incident Resolution',
        'Unit test Mockito',
        'Code Maintenance and Work Documentation'
      ],
      technologies: ['Java', 'Spring Boot', 'Mockito', 'React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQLite']
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`} 
              style={{ animationDelay: `${index * 0.2}s` }}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="timeline-date">
                <span className="date-badge">{exp.period}</span>
              </div>
              <div className="experience-content">
                <div className="mobile-date">
                  <span className="date-badge">{exp.period}</span>
                </div>
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                </div>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 