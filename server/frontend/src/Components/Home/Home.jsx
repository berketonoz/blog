import React from "react";
import "./Home.css";

function Home() {
  const text = "Welcome to Tony's blog";

  return (
    <>
      <div className="background-container">
        <div className="main-container">
          <div className="content">
            {text.split("").map((char, index) => (
              <span key={index} className="animated-letter" style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            {/* Dots for the loading effect */}
            <div className="dots"></div>
          </div>
        </div>
      </div>
      <div className="test">
        Test
      </div>
    </>
  );
}

export default Home;
