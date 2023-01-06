import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Header from './Header';

function Homepage() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <h1>Welcome to MyMediaList</h1>
            <p>
              MyMediaList is a website where you can keep track of all the media
              (movies, TV shows, books, video games, etc) that you have watched,
              read, or played. You can create your own media list and share it
              with other users, or compare your list with other users' lists to
              see what you have in common.
            </p>
            <Button variant="primary" href="#sign-up">
              Sign Up Now
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Featured Media</h2>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="featured-media-1.jpg" />
              <Card.Body>
                <Card.Title>Title of Media</Card.Title>
                <Card.Text>
                  Description of media goes here.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Media
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="featured-media-2.jpg" />
              <Card.Body>
                <Card.Title>Title of Media</Card.Title>
                <Card.Text>
                  Description of media goes here.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Media
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="featured-media-3.jpg" />
              <Card.Body>
                <Card.Title>Title of Media</Card.Title>
                <Card.Text>
                  Description of media goes here.
                </Card.Text>
                <Button variant="primary" href="#">
                  View Media
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
