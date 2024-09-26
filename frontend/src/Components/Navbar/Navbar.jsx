import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarPanel() {
  const [navbarBg, setNavbarBg] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 40) {
      // Scroll threshold, change it as needed
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`navbar navbar-expand-lg fixed-top ${
        navbarBg ? "transparent-bg" : ""
      }`}
      variant={navbarBg ? "light" : "dark"} // Switch between light and dark variants
    >
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">Tony</Link>
        </Navbar.Brand>
        <Nav>
          <Link to="/" className="animated-link">
            Home
          </Link>
          <Link to="/about" className="animated-link">
            About
          </Link>
          <Link to="/contact" className="animated-link">
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;
