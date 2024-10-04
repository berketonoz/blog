import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./CodeSnippet.css"; // Optional: CSS file for styling

const CodeSnippet = ({ code }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // New state for fade-out

  const handleCopy = (event) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // Show the tooltip
        setIsVisible(true);
        setFadeOut(false); // Ensure fade-out is reset

        // Hide the tooltip after 2 seconds
        setTimeout(() => {
          setFadeOut(true); // Start fading out
          setTimeout(() => {
            setIsVisible(false); // Completely hide after fade-out
          }, 500); // Match this duration with the CSS transition
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy code to clipboard!");
      });
  };

  return (
    <div className="code-snippet">
      <div className="icons-container">
        <div
          className="copy-icon"
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          role="button">
          <FontAwesomeIcon icon={faCopy} />
        </div>
        {isVisible && (
          <div className={`tooltip ${fadeOut ? "fade-out" : ""}`}>
            Code copied to clipboard!
          </div>
        )}
      </div>
      <SyntaxHighlighter language="cpp" customStyle={{backgroundColor: "inherit"}} showLineNumbers >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
