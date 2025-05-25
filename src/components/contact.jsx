import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__header">Contact Me</h2>
      
      <div className="contact__content">
        {/* Contact Form Card */}
        <div className="contact__category">
          <h3 className="contact__category-title">Send a Message</h3>
          <form className="contact__form">
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="contact__input"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="contact__input"
                placeholder="Your email"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="contact__textarea"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="contact__button">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links Card */}
        <div className="contact__category">
          <h3 className="contact__category-title">Connect With Me</h3>
          <div className="contact__social">
            <div className="contact__social-links">
              <a href="https://www.linkedin.com/in/najel-alarcon/" className="contact__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Najel-A" className="contact__social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="mailto:najel.alarcon@sjsu.edu" className="contact__social-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
