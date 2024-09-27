import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Articles.css"; // Import the external CSS file

// Articles Component
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const url = 'https://raw.githubusercontent.com/berketonoz/blog/refs/heads/dev/frontend/public/articles.json';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="article-container">
      <h1 className="article-header">Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <h2 className="title">{article.title}</h2>
            <div className="article-detail-header">
              <p className="info">
                <strong>Programming Languages:</strong>
                <span className="info-item">
                  {article.programmingLanguages.map((language, index) => (
                    <span key={index} className="item-badge">
                      {language}
                    </span>
                  ))}
                </span>
              </p>
              <p className="info">
                <strong>Category:</strong>
                <span className="info-item">
                  <span className="item-badge">{article.category}</span>
                </span>
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faCalendar} /> {article.publishDate}
              </p>
              <p className="info">
                <FontAwesomeIcon icon={faComment} /> {article.comments.length}
              </p>
            </div>
            <p className="description">{article.description}</p>
            <div className="button-container">
              <Button
                variant="primary"
                onClick={() => navigate(`/article/${article.id}`)}
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

export default Articles;
