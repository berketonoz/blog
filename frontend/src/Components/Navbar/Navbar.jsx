import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoImg from "../../assets/logo.png"
import "./Navbar.css";

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
        <Navbar.Brand>
          <Link to="/">
            <img src={LogoImg} alt="Logo" className="logo"/>
          </Link>
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
