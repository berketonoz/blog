import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoImg from "../../assets/logo.png";
import "./Navbar.css";

function NavbarPanel() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to manage Navbar expand/collapse

  // Function to handle scroll event
  const handleScroll = () => {
    setNavbarBg(window.scrollY > 40);
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      expand="md" // This ensures the navbar toggles on medium or smaller devices
      className="fixed-top navbar-dark"
      onToggle={() => setExpanded(!expanded)}
      onSelect={() => setExpanded(false)} // Collapse the navbar on selecting an item
      bg="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={LogoImg} alt="Logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* This is the hamburger menu button */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto"> {/* This aligns the nav items to the right */}
            <Nav.Link as={Link} to="/" className="animated-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="animated-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="animated-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;
