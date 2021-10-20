import React from "react";
import "./Contacts.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
function Contacts() {
  return (
    <div className="contactForm">
      <Container fluid="md">
        <h2>Contact Us</h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label column lg={2}>
              Name
            </Form.Label>

            <Form.Control type="name" placeholder="Name" />

            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>FeedBack</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" className="Button" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contacts;
