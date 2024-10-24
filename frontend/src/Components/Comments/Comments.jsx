import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./Comments.css";

const CommentForm = ({ id }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // const url = 'https://node-backend-766320992980.us-central1.run.app/api/comments';
  const url = 'http://localhost:3001/api/comments';

  useEffect(() => {
    const fetchComments = () => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const filteredData = data.filter((d) => d.id === parseInt(id, 10));
          setCommentsList(filteredData)
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }

    fetchComments();
  }, [id])


  const getFormattedDateTime = () => {
    return new Date().getDate(); // Return the Date object directly
  };

  const timeAgo = (timestamp) => {
    const date = new Date(timestamp);  // Convert timestamp to Date object
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);  // Calculate difference in seconds

    // Calculate time intervals
    const intervals = [
      { label: "years", seconds: 31536000 },
      { label: "months", seconds: 2592000 },
      { label: "days", seconds: 86400 },
      { label: "hours", seconds: 3600 },
      { label: "minutes", seconds: 60 },
    ];

    for (let { label, seconds: intervalSeconds } of intervals) {
      const interval = Math.floor(seconds / intervalSeconds);
      if (interval > 1) return `${interval} ${label} ago`;
      if (interval === 1) return `1 ${label.slice(0, -1)} ago`;  // handle singular
    }

    return seconds <= 0 ? "Just now" : `${seconds} seconds ago`;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset the error message

    if (!id || !username || !comment) {
      setErrorMessage("Please fill in all fields."); // Set error message
      return;
    }

    // const commentDate = getFormattedDateTime(); // Get the current Date object
    const newComment = { id, type: 'T', username, comment };
    setCommentsList([...commentsList, newComment]);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment)
    })
      .then((res) => console.log(res))
      .catch(err => console.log(err));

    // Clear the form fields
    setUsername("");
    setComment("");
  };

  const isLoggedIn = sessionStorage.getItem("username") !== null;

  if (isLoading)
    return <div>Loading...</div>;

  return (
    <div className="comments-container">
      <div className="mt-3">
        {commentsList.map((c, index) => (
          <Card key={`${c.date}-${index}`} className="mb-2">
            <Card.Body>
              <Card.Title>{c.username}</Card.Title>
              <Card.Text>{c.comment}</Card.Text>
              <small className="text-muted">{timeAgo(c.timestamp)}</small> {/* Display time ago */}
            </Card.Body>
          </Card>
        ))}
      </div>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}

      <Card>
        <Card.Body>
          <h5>Post a Comment</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your comment here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommentForm;
