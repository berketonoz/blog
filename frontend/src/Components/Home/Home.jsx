import React, { useRef } from "react";
import "./Home.css";
import HomeBg from "../../assets/home-background.jpg";
import Tutorials from "../Tutorials/Tutorials";
import Footer from "../Footer/Footer";

function Home({darkMode}) {
  const text = "Welcome to Tony's Tech Blog";
  const tutorialsRef = useRef(null);

  const scrollToTutorials = () => {
    tutorialsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        <div className="main-container">
          <div className="content" style={{ flexDirection: "column" }}>
            <div className="welcome-text">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className="animated-letter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="dots"></div>
            <button className="cta-button" onClick={scrollToTutorials}>
              Explore Tutorials
            </button>
          </div>
        </div>
      </div>
      <div ref={tutorialsRef} className={`tutorials-section`}>
        <Tutorials darkMode={darkMode}/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
