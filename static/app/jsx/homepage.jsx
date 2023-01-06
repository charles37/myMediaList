import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero.jsx';
import FeaturedMedia from './FeaturedMedia.jsx';
import Testimonials from './Testimonials.jsx';
import Benefits from './Benefits.jsx';
import CallToAction from './CallToAction.jsx';

import { render } from 'react-dom';


function Homepage() {
  return (
    <Container>
      <Row>
        <Col>
          <Hero />
        </Col>
      </Row>
      <Row>
        <Col>
          <FeaturedMedia />
        </Col>
      </Row>
      <Row>
        <Col>
          <Testimonials />
        </Col>
      </Row>
      <Row>
        <Col>
          <Benefits />
        </Col>
      </Row>
      <Row>
        <Col>
          <CallToAction />
        </Col>
      </Row>
    </Container>
  );
}


const app = document.getElementById('app');
render(<Homepage />, app);

export default Homepage;
