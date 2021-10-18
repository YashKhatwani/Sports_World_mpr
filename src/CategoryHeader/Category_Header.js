import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./CategoryHeader.css";

export default function Category_Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav justify variant="tabs">
            <div className="header__category__sports">
              <div className="Sport_element">
                <Link
                  to="/Sports/cricket"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Cricket</h4>
                </Link>
              </div>
              <div className="Sport_element">
                <Link
                  to="/Sports/Football"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Football</h4>
                </Link>
              </div>
              <div className="Sport_element">
                <Link
                  to="/Sports/Tennis"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <h4>Tennis</h4>
                </Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
