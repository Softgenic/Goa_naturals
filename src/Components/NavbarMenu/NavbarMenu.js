import React, { useState } from "react";
import "./NavbarMenu.css";
// React-bootstrap components
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// Logo components
import Logo from "../Assets/images/goa-natural-logo-mini.jpg";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // lOGO size changed
  const [size, setsize] = useState(false);
  const changeSize = () => {
    if (window.scrollY >= 90) {
      setsize(true);
    } else {
      setsize(false);
    }
  };
  window.addEventListener("scroll", changeSize);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={color ? "navbar navbar-bg " : "navbar"}
      >
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className={
              size ? "navbar-brand img" : "navbar-brand-changed-size img"
            }
          >
            <img src={Logo} alt="Goa Natural Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Product dropdown start here */}
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">SunFlower Oil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Turmeric Powder
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Groundnut Oil
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Coconut Oil
                </NavDropdown.Item>
              </NavDropdown>
              {/* Product dropdown end */}

            {/* More section Dropdown start */}
              <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/">About Us</Nav.Link>
              
            {/* Login Link */}
            <Nav.Link as={Link} to="/">Login</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
