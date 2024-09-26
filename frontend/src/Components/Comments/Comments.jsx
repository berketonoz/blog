import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./Comments.css";

const CommentForm = ({ comments }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState(comments);
  const [errorMessage, setErrorMessage] = useState("");

  const getFormattedDateTime = () => {
    return new Date(); // Return the Date object directly
  };

  const timeAgo = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

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
      if (interval === 1) return `1 ${label.slice(0, -1)} ago`; // handle singular
    }

    return seconds <= 0 ? "Just now" : `${seconds} seconds ago`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset the error message

    if (!firstName || !lastName || !comment) {
      setErrorMessage("Please fill in all fields."); // Set error message
      return;
    }

    const commentDate = getFormattedDateTime(); // Get the current Date object
    const newComment = { firstName, lastName, comment, date: commentDate };
    setCommentsList([...commentsList, newComment]);

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setComment("");
  };

  return (
    <div className="comments-container">
      <div className="mt-3">
        {commentsList.map((c, index) => (
          <Card key={`${c.date}-${index}`} className="mb-2">
            <Card.Body>
              <Card.Title>{`${c.firstName} ${c.lastName}`}</Card.Title>
              <Card.Text>{c.comment}</Card.Text>
              <small className="text-muted">{timeAgo(c.date)}</small> {/* Display time ago */}
            </Card.Body>
          </Card>
        ))}
      </div>

      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} {/* Display error message */}

      <Card>
        <Card.Body>
          <h5>Post a Comment</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
