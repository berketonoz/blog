// Tutorial.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import CommentForm from "../Comments/Comments";
import "./Tutorial.css"; // Using the updated CSS for shared styles
import Footer from "../Footer/Footer";

const Tutorial = ({darkMode}) => {
  const [tutorial, setTutorial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const url =
    "https://raw.githubusercontent.com/berketonoz/blog/refs/heads/dev/frontend/public/tutorials.json";

  useEffect(() => {
    const fetchTutorial = async () => {
      try {
        window.scrollTo(0, 0);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const foundTutorial = data.find(
          (tutorialItem) => tutorialItem.id === parseInt(id, 10)
        );
        if (!foundTutorial) {
          throw new Error("Tutorial not found");
        }
        setTutorial(foundTutorial);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorial();
  }, [id, url]);

  if (loading) {
    return <div className="loading-indicator">Loading...</div>;
  }

  if (error) {
    return (
      <div className="tutorial-wrapper">
        <h2 className="tutorial-title no-hover">Error</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className={`tutorial-wrapper ${darkMode ? "dark-theme" : "light-theme"}`}>
        <h2 className="tutorial-title no-hover">{tutorial.title}</h2>
        <div className="tutorial-category">{tutorial.category}</div>
        <div className="tutorial-publish-date">{tutorial.publishDate}</div>
        <div className="tutorial-languages"></div>
        <Tabs defaultActiveKey={tutorial.programmingLanguages[0]} id="language-tabs">
          {tutorial.programmingLanguages.map((lang) => (
            <Tab eventKey={lang} title={lang} key={lang}>
              <div className="tutorial-details">
                <p>{tutorial.details[lang]}</p>
                <hr />
                {Object.keys(tutorial.codeSnippets[lang]).map((funcName) => (
                  <div className="function" key={funcName}>
                    <h3>{capitalizeFirstLetter(funcName)}</h3>
                    <p className="function-description">
                      {tutorial.descriptions[lang][funcName]}
                    </p>
                    <CodeSnippet code={tutorial.codeSnippets[lang][funcName]} darkMode={darkMode} />
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <CommentForm comments={tutorial.comments} />
      <Footer />
    </>
  );
};

// Helper function to capitalize the first letter
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Tutorial;
