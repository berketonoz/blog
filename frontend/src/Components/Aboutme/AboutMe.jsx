import React from "react";
import "./AboutMe.css";
import UserImg from "../../assets/user-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <section className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-pane">
          <img src={UserImg} alt="Profile" className="profile-image" />
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>SQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Angular.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Django</li>
            <li>ETL Development</li>
            <li>Data Modeling</li>
            <li>Git Proficiency</li>
          </ul>
        </div>
        <div className="bio-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Tony! I'm a medior full stack developer and a BW consultant
            with a degree in Computer Science and Engineering. I am passionate about web development,
            AI, and emerging technologies.
          </p>
          <p>
            I have hands-on experience in front-end frameworks like Angular.js
            and React.js, as well as back-end frameworks including Node.js,
            Express.js, and Django. My interests mainly lie in algorithms,
            cryptography, and CTF challenges, along with sports and games.
          </p>
          <p>
            In this blog, I aim to share insights, tutorials, and articles that
            inspire and help others in the tech space. Whether you're new to
            coding or an experienced developer, I hope you find something
            valuable here.
          </p>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/berke-tonoz-46491b149"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} size="2x" />
            </a>
            <a
              href="https://github.com/berketonoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} style={{color: "#181717"}} size="2x" />
            </a>
            <a href="mailto:btonoz@alumni.sabanciuniv.edu">
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#6c757d"}} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
