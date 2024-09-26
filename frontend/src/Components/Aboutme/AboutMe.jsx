import React from "react";
import "./AboutMe.css";
import UserImg from "../../assets/user-image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <section className="about-me-container">
      <div className="about-me-content">
        <img
          src={UserImg} 
          alt="Profile" 
          className="profile-image"
        />
        <div className="bio-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Tony! I'm a tech enthusiast and a passionate blogger focused on web development, AI, and emerging technologies. 
            I love to explore new ideas, share knowledge, and build cool things.
          </p>
          <p>
            In this blog, I aim to share insights, tutorials, and articles that inspire and help others in the tech space. Whether you're 
            new to coding or an experienced developer, I hope you find something valuable here.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com/in/berke-tonoz-46491b149" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/berketonoz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:btonoz@alumni.sabanciuniv.edu">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
