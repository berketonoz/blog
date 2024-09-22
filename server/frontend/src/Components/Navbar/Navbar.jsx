import React from "react";
import "./NavBar.css";
import { Navbar, Container, Nav } from 'react-bootstrap';


function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#">Tony</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>
          <Nav.Link href="blog">Blog</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
