import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import NavIcons from './NavIcons'
import Image from 'next/image';

function NavBar() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className="container container-xl">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-bar">
              <Nav.Link className="new-items">New</Nav.Link>
              <Nav.Link className="best-sellers">Best Sellers</Nav.Link>
              <Nav.Link className="skin-care">Skin Care</Nav.Link>
              <Nav.Link className="hair-care">Hair Care</Nav.Link>
              <Nav.Link className="body-care">Body Care</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
  );
}


export default NavBar;
