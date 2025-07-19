import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import { useLocation } from 'react-router-dom';
import Logo from "../../assets/images/nav-bar/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  // const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Navbar expand="sm" variant="dark" fixed="top" className="px-2">
        <Container className="nav-bar  px-lg-4 px-3">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={Logo}
              className="d-inline-block logo "
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="custom-navbar-spacing"
          >
            <Nav className="nav-list">
              <CustomNavLink href="/" className="nav-item">
                Home
              </CustomNavLink>
              <CustomNavLink href="/about-us" className="nav-item">
                About Us
              </CustomNavLink>
              <CustomNavLink href="/pricing" className="nav-item">
                Pricing
              </CustomNavLink>
              <CustomNavLink href="/documentation" className="nav-item">
                Documentation
              </CustomNavLink>
              <CustomNavLink href="/contact" className="nav-item">
                Contact Me
              </CustomNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

function CustomNavLink({ href, currentPath, children }) {
  const isActive = currentPath === href;

  return (
    <Nav.Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Nav.Link>
  );
}

export default NavBar;
