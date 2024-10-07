import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tutorials.css"; // Import the external CSS file

// tutorials Component
const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  const navigate = useNavigate();
  const url =
    "https://raw.githubusercontent.com/berketonoz/blog/refs/heads/dev/frontend/public/tutorials.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data = data.sort((a, b) => {
          return new Date(b.publishDate) - new Date(a.publishDate);
        });
        console.log(data);
        setTutorials(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tutorial-container">
      {/* <h1 className="tutorial-header">Tutorials</h1> */}
      <ul className="tutorial-list">
        {tutorials.map((tutorial) => (
          <li key={tutorial.id} className="tutorial-item">
            <h2
              className="title"
              onClick={() => navigate(`/tutorial/${tutorial.id}`)}
            >
              {tutorial.title}
            </h2>
            <div className="tutorial-detail-header">
              <p className="info">
                <strong>Programming Languages:</strong>
                <span className="info-item">
                  {tutorial.programmingLanguages.map((language, index) => (
                    <span key={index} className="item-badge">
                      {language}
                    </span>
                  ))}
                </span>
              </p>
              <p className="info">
                <strong>Category:</strong>
                <span className="info-item">
                  <span className="item-badge">{tutorial.category}</span>
                </span>
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faCalendar} /> {tutorial.publishDate}
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faComment} /> {tutorial.comments.length}
              </p>
            </div>
            <p className="description">{tutorial.description}</p>
            <div className="button-container">
              <Button
                variant="primary"
                onClick={() => navigate(`/tutorial/${tutorial.id}`)}
              >
                Continue Reading
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
