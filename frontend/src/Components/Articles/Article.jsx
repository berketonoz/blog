import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import "./Article.css"; // Using the same CSS for shared styles
import CommentForm from "../Comments/Comments";
import { useState } from "react";

const Article = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // const article = articles.find((article) => article.id === parseInt(id));

  useEffect(() => {
    window.scroll(0, 0);
    fetch("./data/articles.json")
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.find((article) => article.id === parseInt(id)));
        console.log(data.find((article) => article.id === parseInt(id)));
        
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="article-wrapper">
        <h2 className="article-title">{article.title}</h2>
        <div className="article-category">{article.category}</div>
        <div className="article-publish-date">{article.publishDate}</div>
        <div className="article-languages">Programming Languages:</div>
        <Tabs defaultActiveKey={article.programmingLanguages[0]}>
          {article.programmingLanguages.map((lang) => (
            <Tab eventKey={lang} title={lang} key={lang}>
              <div className="article-details">
                <p>{article.details[lang]}</p>
                <hr />
                {Object.keys(article.codeSnippets[lang]).map((key, index) => (
                  <div className="function" key={index}>
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                    <p className="function-description">
                      {article.descriptions[lang][key]}
                    </p>
                    <CodeSnippet code={article.codeSnippets[lang][key]}/>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
      <CommentForm comments={article.comments} />
    </>
  );
};

export default Article;
