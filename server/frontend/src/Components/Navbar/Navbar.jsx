import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarPanel() {
  const [navbarBg, setNavbarBg] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {
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
        navbarBg ? "bg-light navbar-light" : "bg-transparent"
      }`}
      variant={navbarBg ? "light" : "dark"} // Switch between light and dark variants
      >
      <Container>
        <Navbar.Brand href="/" className="logo">Tony</Navbar.Brand>
        <Nav>
            <Nav.Link href="/" className="animated-link">Home</Nav.Link>
            <Nav.Link href="/about" className="animated-link">About</Nav.Link>
            <Nav.Link href="#contact" className="animated-link">Contact</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;
