import React from "react";
import { Link,NavLink  } from "react-router-dom"; // Import the Link component
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/css/Navbar.css";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar">
      <Container fluid>
        <Navbar.Brand>RECOLOGY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link as={NavLink} to="/" exact activeClassName="active" className="navlink">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/intro" activeClassName="active" className="navlink">
            Introduction
          </Nav.Link>
          <Nav.Link as={NavLink} to="/origin" activeClassName="active" className="navlink">
            Origin
          </Nav.Link>
          <Nav.Link as={NavLink} to="/process" activeClassName="active" className="navlink">
            Process
          </Nav.Link>
          <Nav.Link as={NavLink} to="/advantages" activeClassName="active" className="navlink">
            Advantages
          </Nav.Link>
          <Nav.Link as={NavLink} to="/sustainability" activeClassName="active" className="navlink">
            Sustainability
          </Nav.Link>
          <Nav.Link as={NavLink} to="/case-studies" activeClassName="active" className="navlink">
            Case Studies
          </Nav.Link>
        </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
