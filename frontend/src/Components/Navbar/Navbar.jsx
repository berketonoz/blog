import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoImg from "../../assets/logo.png";
import "./Navbar.css";

function NavbarPanel() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const navRef = useRef(null);
  const location = useLocation(); // To detect route changes

  const handleToggle = () => setIsOn(!isOn);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 40) {
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
      className={`navbar-custom ${
        navbarBg ? "navbar-bg" : "navbar-transparent"
      }`}
      onToggle={setExpanded}
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
        />
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
              to="/contact"
              className="animated-link"
              onClick={handleLinkClick}
              aria-label="Contact Us"
            >
              Contact
            </Nav.Link>
            <Nav.Item className="animated- no-hover" aria-label="theme">
              <div className="theme-slider">
                Dark Mode
                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isOn}
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
