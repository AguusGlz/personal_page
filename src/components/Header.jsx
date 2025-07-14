import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" className="logo-link">
              <div className="logo-circle">
                <span>AG</span>
              </div>
            </a>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
              <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 