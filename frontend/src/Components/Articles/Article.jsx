import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
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
  const [key, setKey] = useState("C++"); // Default tab

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const selectedArticle = articles.find((article) => article.id === Number(id));
    if (selectedArticle) {
      setArticle(selectedArticle);
      setKey(selectedArticle.programmingLanguages[0]); // Set default tab based on available languages
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
      <p className="article-publish-date">
        <strong>Published on:</strong> {article.publishDate}
      </p>
      
      {/* React-Bootstrap Tabs for different languages */}
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        {article.programmingLanguages.map((language) => (
          <Tab eventKey={language} title={language} key={language}>
            <div className="tab-content">
              <h2>Details for {language}</h2>
              <p>{article.details[language]}</p>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Article;
