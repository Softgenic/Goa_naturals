import React, { useState } from "react";
import "./NavbarMenu.css";
// React-bootstrap components
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// Logo components
import Logo from "../Assets/images/goa-natural-logo-mini.jpg";
import { Link } from "react-router-dom";
const NavbarMenu = () => {
// close mobile menu Navbar
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

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

  // Show drop down on mousehover
  const [showdropdown, setshowdropdown] = useState(false);
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } /></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* Product dropdown start here */}
              <NavDropdown title="Products" id="collasible-nav-dropdown" show={showdropdown} onMouseEnter={() => setshowdropdown(true)} onMouseLeave={() => setshowdropdown(false)}>
                <NavDropdown.Item as={Link} to="/" eventKey={1} onClick={closeMobileMenu}>SunFlower Oil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" eventKey={2} onClick={closeMobileMenu}>
                  Turmeric Powder
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" eventKey={3} onClick={closeMobileMenu}>
                  Groundnut Oil
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" eventKey={4} onClick={closeMobileMenu}>
                  Coconut Oil
                </NavDropdown.Item>
              </NavDropdown>
              {/* Product dropdown end */}

            {/* More section Dropdown start */}
              <Nav.Link as={Link} to="/" onClick={closeMobileMenu} eventKey={1}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/" onClick={closeMobileMenu} eventKey={2}>About Us</Nav.Link>
              
            {/* Login Link */}
            <Nav.Link as={Link} to="/" onClick={closeMobileMenu} eventKey={3}>Login</Nav.Link>
            
          </Nav>
          
          </Navbar.Collapse>
          
          <span class="fa-stack fa-1x has-badge" data-count="5">
        
          <i  className="fa fa-shopping-cart  red-cart"></i>
        </span>
        </Container>
       
      </Navbar>
     
    </div>
  );
};

export default NavbarMenu;
