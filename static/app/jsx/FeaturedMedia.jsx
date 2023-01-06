import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

const featuredMedia = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    cover: '/img/shawshank.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  },
  {
    id: 2,
    title: 'The Godfather',
    cover: '/img/godfather.jpg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    cover: '/img/darkknight.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  },
];

function FeaturedMedia() {
  return (
    <Container>
      <h2 className="text-center mt-4 mb-4">Featured Media</h2>
      <CardGroup>
        {featuredMedia.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.cover} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            </Card>
        ))}
        </CardGroup>
    </Container>
    );
}

export default FeaturedMedia;
