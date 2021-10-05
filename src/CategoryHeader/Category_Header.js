import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Category_Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sports</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Cricket</Nav.Link>
            <Nav.Link href="#features">Football</Nav.Link>
            <Nav.Link href="#pricing">Badminton</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
