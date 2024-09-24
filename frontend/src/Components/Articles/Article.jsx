import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css"; // Using the same CSS for shared styles

const articles = [
  {
    id: 1,
    title: "Stack",
    category: "Data Structures",
    publishDate: "2024-09-24",
    programmingLanguages: ["C++", "Python"],
    details: {
      "C++":
        "In C++, a stack can be implemented using the Standard Template Library (STL). The stack is a linear data structure that follows LIFO (Last In First Out) principle. The major operations on a stack are push, pop, and top.",
      Python:
        "In Python, the stack can be implemented using lists. Lists in Python provide the functionality of a dynamic array, but they can also be used to implement a stack by using the append() and pop() methods.",
    },
  },
  {
    id: 2,
    title: "Linked List",
    category: "Data Structures",
    publishDate: "2024-09-26",
    programmingLanguages: ["C++", "Python"],
    details: {
      "C++":
        "A linked list in C++ is a data structure in which each element (node) contains a pointer to the next node in the sequence. It allows for efficient insertion and deletion operations.",
      Python:
        "In Python, a linked list is typically implemented using classes. Each node contains data and a reference to the next node. It can be implemented manually since Python doesn't have a built-in linked list.",
    },
  },
];

// Article Component for displaying detailed article view with tabs for language
const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const selectedArticle = articles.find((article) => article.id === Number(id));
    if (selectedArticle) {
      setArticle(selectedArticle);
      setSelectedLanguage(selectedArticle.programmingLanguages[0]);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="loading-indicator">Loading...</div>; // Return a div for loading state
  }

  return (
    <div className="article-wrapper">
      <h1 className="article-title">{article.title}</h1>
      <p className="article-category">
        <strong>Category:</strong> {article.category}
      </p>
      <p className="article-languages">
        <strong>Programming Languages:</strong>
        <span className="language-list">
          {article.programmingLanguages.map((language, index) => (
            <span
              key={index}
              className={`language-badge ${language === selectedLanguage ? "active" : ""}`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </span>
          ))}
        </span>
      </p>
      <p className="article-publish-date">
        <strong>Published on:</strong> {article.publishDate}
      </p>
      <hr />

      {/* Tabs for different languages */}
      <div className="article-details">
        <h2>Details for {selectedLanguage}</h2>
        <p>{article.details[selectedLanguage]}</p>
      </div>
    </div>
  );
};

export default Article;
