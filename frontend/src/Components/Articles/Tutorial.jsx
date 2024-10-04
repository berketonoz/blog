import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import CommentForm from "../Comments/Comments";
import "./Tutorial.css"; // Using the same CSS for shared styles

const Tutorial = () => {
  const [tutorial, setTTutorial] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = "https://raw.githubusercontent.com/berketonoz/blog/refs/heads/dev/frontend/public/tutorials.json";

  useEffect(() => {
    window.scroll(0, 0);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTTutorial(data.find((tutorial) => tutorial.id === parseInt(id)));
        console.log(data.find((tutorial) => tutorial.id === parseInt(id)));
        
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="tutorial-wrapper">
        <strong><h2 className="tutorial-title">{tutorial.title}</h2></strong>
        <div className="tutorial-category">{tutorial.category}</div>
        <div className="tutorial-publish-date">{tutorial.publishDate}</div>
        <div className="tutorial-languages">Programming Languages:</div>
        <Tabs defaultActiveKey={tutorial.programmingLanguages[0]}>
          {tutorial.programmingLanguages.map((lang) => (
            <Tab eventKey={lang} title={lang} key={lang}>
              <div className="tutorial-details">
                <p>{tutorial.details[lang]}</p>
                <hr />
                {Object.keys(tutorial.codeSnippets[lang]).map((key, index) => (
                  <div className="function" key={index}>
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    <p className="function-description">
                      {tutorial.descriptions[lang][key]}
                    </p>
                    <CodeSnippet code={tutorial.codeSnippets[lang][key]}/>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <CommentForm comments={tutorial.comments} />
    </>
  );
};

export default Tutorial;
