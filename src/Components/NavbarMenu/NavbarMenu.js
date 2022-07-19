import React, { useState } from "react";
import "./NavbarMenu.css";
// React-bootstrap components
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SearchBar from "material-ui-search-bar";
// Logo components
import Logo from "../Assests/images/goa-natural-logo-mini.jpg";
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
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Goa Natural Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Product dropdown start here */}
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/coconut">Coconut oil</NavDropdown.Item>
                <NavDropdown.Item href="/groundnut">
                  Groundnut oil
                </NavDropdown.Item>
                <NavDropdown.Item href="/safflower">
                  Safflower oil
                </NavDropdown.Item>
                <NavDropdown.Item href="/turmeric">
                  Turmeric powder
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/products">
                  All Products
                </NavDropdown.Item>
              </NavDropdown>
              {/* Product dropdown end */}

              {/* More section Dropdown start */}
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {/* More Sectiob Dropdown End */}
              {/* Login Link */}
              <Nav.Link as={Link} to="/">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link>
              | <i className="fas fa-shopping-cart me-2 ms-2"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarMenu;
