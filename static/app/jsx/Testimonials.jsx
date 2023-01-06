import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/img/avatar1.jpg',
    quote: 'MyMediaList has helped me keep track of all the movies, TV shows, and books I have watched or read. It’s a great way to discover new recommendations and share my list with friends.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: '/img/avatar2.jpg',
    quote: 'I love how easy it is to add new items to my media list and see what my friends are watching or reading. MyMediaList has become a valuable resource for finding new media to enjoy.',
  },
  {
    id: 3,
    name: 'Bob Smith',
    avatar: '/img/avatar3.jpg',
    quote: 'As a huge fan of video games, MyMediaList has been a lifesaver for keeping track of all the games I have played. The recommendations feature has also introduced me to some amazing new games that I wouldn’t have discovered otherwise.',
  },
];

function Testimonials() {
    return (
        <Container>
          <h2 className="text-center mt-4 mb-4">Testimonials</h2>
          <CardGroup>
            {testimonials.map((item) => (
              <Card key={item.id}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.quote}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <img src={item.avatar} alt={item.name} className="rounded-circle" width="50" height="50" />
                  </small>
                </Card.Footer>
              </Card>
            ))}
          </CardGroup>
        </Container>
      );
}

export default Testimonials;
      
