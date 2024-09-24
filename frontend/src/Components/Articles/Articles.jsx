import React from "react";
import "./Articles.css"; // Import the external CSS file

// Static list of beginner-friendly data structure articles
const articles = [
  {
    id: 1,
    title: "Stack",
    category: "Data Structures",
    publishDate: "2024-09-24",
    programmingLanguages: ["C++", "Python"],
  },
  {
    id: 2,
    title: "Linked List",
    category: "Data Structures",
    publishDate: "2024-09-26",
    programmingLanguages: ["C++", "Python"],
  },
];

// Articles Component
const Articles = () => {
  return (
    <div className="article-container">
      <h1 className="article-header">Articles</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <h2 className="title">{article.title}</h2>
            <p className="info">
              <strong>Category:</strong> {article.category}
            </p>
            <p className="info">
              <strong>Programming Languages:</strong> 
              <span className="languages">
                {article.programmingLanguages.map((language, index) => (
                  <span key={index} className="language-badge">
                    {language}
                  </span>
                ))}
              </span>
            </p>
            <p className="info">
              <strong>Published on:</strong> {article.publishDate}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
