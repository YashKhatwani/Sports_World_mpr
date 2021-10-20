import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./BrandHeader.css";

export default function Brand_Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav justify variant="tabs">
            <div className="header__category__brand">
              <div className="Brand_Element">
                <Link
                  to="/Brands/Nike"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Nike</h4>
                </Link>
              </div>
              <div className="Brand_Element">
                <Link
                  to="Adidas"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Adidas</h4>
                </Link>
              </div>
              <div className="Brand_Element">
                <Link
                  to="Puma"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Puma</h4>
                </Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
