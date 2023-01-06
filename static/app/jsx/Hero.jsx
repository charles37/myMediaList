import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <Container fluid className="bg-primary py-5 text-center text-white">
      <Row>
        <Col>
          <h1 className="display-4">Welcome to MyMediaList</h1>
          <p className="lead">
            Keep track of all the media you have watched, read, or played and share your list with others.
          </p>
          <hr className="my-4" />
          <p>
            MyMediaList is a simple and easy way to organize your media list and discover new recommendations based on your preferences.
          </p>
          <Button variant="outline-light" size="lg">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
