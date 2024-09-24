import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me-container">
      <div className="about-me-content">
        <img
          src="your-profile-picture-url.jpg" 
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
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:youremail@example.com">Email Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
