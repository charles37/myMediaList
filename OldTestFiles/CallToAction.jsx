import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <Container fluid className="bg-primary py-5 text-center text-white">
      <Row>
        <Col>
          <h2>Ready to organize your media list?</h2>
          <p className="lead">Sign up for MyMediaList and start organizing your media today.</p>
          <Button variant="outline-light" size="lg">Sign Up</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CallToAction;
