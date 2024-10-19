// NavbarPanel.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoImg from "../../assets/logo.png";
import "./Navbar.css";

function NavbarPanel({ darkMode, setDarkMode }) {
  const [navbarBg, setNavbarBg] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); // To detect route changes

  const handleToggle = () => setDarkMode(!darkMode);

  // Function to handle scroll event
  const handleScroll = () => {
    setExpanded(false);
    if (window.scrollY > 5) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  // Function to handle clicks outside the navbar when expanded
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  // Close the navbar when a link is clicked
  const handleLinkClick = () => {
    setExpanded(false);
  };

  // Close the navbar when the route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Add scroll and click event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      fixed="top"
      // ${ navbarBg ? "navbar-bg" : "navbar-transparent" }
      className={`navbar-custom 
      ${ darkMode ? "dark-mode" : "" }
      ${ expanded ? "active" : "" }`} // Add 'active' class when expanded
      // bg={`${darkMode ? "dark" : "light"}`}
      onToggle={() => setExpanded(!expanded)} // Toggle expanded state
      ref={navRef}
      aria-label="Main Navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={LogoImg} alt="Company Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          className={expanded ? "open" : ""}
          onClick={() => setExpanded(!expanded)} // Set expanded state on click
          aria-placeholder="Test"
        >
          <span className={`navbar-toggler-icon ${darkMode ? "dark-mode" : "light-mode"}`}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link
              as={Link}
              to="/"
              className="animated-link"
              onClick={handleLinkClick}
              aria-label="Home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="animated-link"
              onClick={handleLinkClick}
              aria-label="About Us"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className="animated-link"
              onClick={handleLinkClick}
              aria-label="Contact Us"
            >
              Projects
            </Nav.Link>
            <Nav.Item className="animated- no-hover" aria-label="theme">
              <div className="theme-slider" style={{marginTop: "5px"}}>
                Dark Mode
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleToggle}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </Nav.Item>
            {/* Add more Nav.Links here if needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;
