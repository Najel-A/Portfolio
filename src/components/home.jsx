import React from "react";
import "../styles/home.css"; // Import CSS file
import profileImage from "../assets/about_me.png"; // Import image

import { useState, useEffect } from 'react';

const Home = () => {
    // Add Phrases here
    const phrases = [
      "I_like_to_code.py",
      "404: Limits_not_found",
      "Full-Stack_Engineer.js",
      "cd /your/team && npm install me",
      "Fitness_Enthusiast"
    ];
  
    const [typedText, setTypedText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
  
    useEffect(() => {
      const typingSpeed = 100; // Speed of typing (in ms)
      const deletingSpeed = 50; // Speed of deleting (in ms)
      const delayBeforeDeleting = 2000; // Time before deleting starts (in ms)
      const delayBeforeNextPhrase = 1500; // Time before starting to type next phrase (in ms)
  
      let interval;
  
      if (!isDeleting && textIndex <= phrases[currentPhraseIndex].length - 1) {
        // Typing effect
        interval = setInterval(() => {
          setTypedText((prev) => prev + phrases[currentPhraseIndex][textIndex]);
          setTextIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (isDeleting && textIndex > 0) {
        // Deleting effect
        interval = setInterval(() => {
          setTypedText((prev) => prev.slice(0, -1));
          setTextIndex((prev) => prev - 1);
        }, deletingSpeed);
      }
  
      // Start deleting after typing is done
      if (textIndex === phrases[currentPhraseIndex].length && !isDeleting) {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDeleting);
      }
  
      // Move to the next phrase after deleting
      if (textIndex === 0 && isDeleting) {
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Cycle through phrases
        }, delayBeforeNextPhrase);
      }
  
      // Clear the interval on cleanup
      return () => clearInterval(interval);
    }, [textIndex, isDeleting, currentPhraseIndex, phrases]);
  
    useEffect(() => {
      if (textIndex === 0 && isDeleting) {
        setTypedText("");  // Explicitly set empty string for consistency
      }
    }, [textIndex, isDeleting]);
    
  
    return (
      <section className="home">
        <div className="home__circle"></div>
        <div className="home__circle"></div>
        <div className="home__profile">
          <img src={profileImage} alt="Profile" className="home__profile-image" />
        </div>
        <p className="home__subtitle">Software Engineer</p>
        <h1 className="home__title">
          {typedText}
          <span className="cursor"></span> {/* Blinking cursor */}
        </h1>
        <nav className="home__nav">
          <a href="#about" className="home__nav-link">About</a>
          {/* <a href="#experience" className="home__nav-link">Experience</a> */}
          <a href="#skills" className="home__nav-link">Skills</a>
          <a href="#projects" className="home__nav-link">Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="home__nav-link">
            Resume
          </a>


        </nav>
      </section>
    );
  };
  
export default Home;
