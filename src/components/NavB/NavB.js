import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './NavB.css'
import logo from '../../Images/logo2.png'

function NavB() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#">Nav Link</Nav.Link>
            <Nav.Link href="#">Nav Link</Nav.Link>
            <Nav.Link href="#">Nav Link</Nav.Link>
            <Nav.Link href="#">Nav Link</Nav.Link>
            <button className="navBtn">Work with us</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavB;
