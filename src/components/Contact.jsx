import React, { useState } from 'react'
import './Contact.css'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa'

const Contact = () => {
  const [notification, setNotification] = useState(null)

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      setNotification(`${type} copied to clipboard!`)
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm available for freelance projects, job opportunities 
              or simply to chat about technology. Feel free to contact me.
            </p>
            <div className="contact-methods">
              <div className="contact-method contact-method-clickable" onClick={() => openLink('https://www.linkedin.com/in/agustin-galarza/')}>
                <div className="contact-icon">
                  <FaLinkedin size={28} />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <span className="contact-clickable">
                    Connect with me
                  </span>
                </div>
              </div>
              <div className="contact-method contact-method-clickable" onClick={() => openLink('https://github.com/AguusGlz')}>
                <div className="contact-icon">
                  <FaGithub size={28} />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <span className="contact-clickable">
                    View my projects
                  </span>
                </div>
              </div>
              <div className="contact-method contact-method-clickable" onClick={() => copyToClipboard('agustin.galarza96@gmail.com', 'Email')}>
                <div className="contact-icon">
                  <MdEmail size={28} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <span className="contact-clickable">
                    agustin.galarza96@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact-method contact-method-clickable" onClick={() => copyToClipboard('+54 9 11 2818-0784', 'Phone number')}>
                <div className="contact-icon">
                  <MdPhone size={28} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <span className="contact-clickable">
                    +54 9 11 2818-0784
                  </span>
                </div>
              </div>
              <div className="contact-method contact-method-clickable" onClick={() => copyToClipboard('Buenos Aires, Argentina', 'Location')}>
                <div className="contact-icon">
                  <MdLocationOn size={28} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <span className="contact-clickable">
                    Buenos Aires, Argentina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification Popup */}
        {notification && (
          <div className="notification">
            <FaCheck size={16} />
            <span>{notification}</span>
          </div>
        )}
      </div>
    </section>
  )
}


export default Contact 