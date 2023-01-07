import React from 'react';

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MediaCard({ title, description, image, link }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>
          View Media
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;
