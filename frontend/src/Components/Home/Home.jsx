import React, { useRef } from "react";
import "./Home.css";
import HomeBg from "../../assets/home-background.jpg"

function Home() {
  const text = "Welcome to Tony's Tech Blog";
  const articlesRef = useRef(null);

  const scrollToArticles = () => {
    articlesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="background-container" style={{backgroundImage: `url(${HomeBg})`}}>
        <div className="main-container">
          <div className="content">
            {text.split("").map((char, index) => (
              <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <div className="dots"></div>
          </div>
          <div className="cta-container">
            <button className="cta-button" onClick={scrollToArticles}>Explore Articles</button>
          </div>
        </div>
      </div>
      <div ref={articlesRef} className="articles-section">
        {/* Your articles content here */}
      </div>
      <div className="footer">
        <p>&copy; 2024 Tony's Tech Blog. All rights reserved.</p>
      </div>
    </>
  );
}

export default Home;
