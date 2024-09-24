// CodeSnippet.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import './CodeSnippet.css'; // Optional: CSS file for styling

const CodeSnippet = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!"); // Optional: feedback to the user
    });
  };

  return (
    <div className="code-snippet">
      <div className="copy-icon" onClick={handleCopy}>
        <FontAwesomeIcon icon={faClipboard} />
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
