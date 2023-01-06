import React from 'react';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';

function Benefits() {
  return (
    <Row>
      <Col xs={12} md={4}>
        <Image src="https://via.placeholder.com/200x200" thumbnail />
      </Col>
      <Col xs={12} md={8}>
        <h2>Why Choose MyMediaList?</h2>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <i className="fas fa-check"></i>
            Keep track of all your media in one place
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check"></i>
            Discover new recommendations based on your preferences
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check"></i>
            Share your list with friends and compare media
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-check"></i>
            Customize your profile and media list settings
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Benefits;
