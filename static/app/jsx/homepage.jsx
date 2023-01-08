// import React from 'react';
// import {Container, Row, Col } from 'react-bootstrap';
// import Hero from './Hero.jsx';
// import FeaturedMedia from './FeaturedMedia.jsx';
// import Testimonials from './Testimonials.jsx';
// import Benefits from './Benefits.jsx';
// import CallToAction from './CallToAction.jsx';

// import { render } from 'react-dom';


// function Homepage() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Hero />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <FeaturedMedia />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Testimonials />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <Benefits />
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <CallToAction />
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// const app = document.getElementById('app');
// render(<Homepage />, app);

// export default Homepage;


import React from 'react';
import { Grid, Box } from '@mui/material';

import HeroBanner from './HeroBanner.jsx';
import FeatureList from './FeatureList.jsx';
import MediaShowcase from './MediaShowcase.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from './Footer.jsx';
import ReactDOM from 'react-dom'


function Homepage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <HeroBanner />
      </Grid>
      <Grid item xs={12}>
        <FeatureList />
      </Grid>
      <Grid item xs={12}>
        <MediaShowcase />
      </Grid>
      <Grid item xs={12}>
        <CallToAction />
      </Grid>
      <Grid item xs={12}>
        <Box mt={4}>
          <Footer />
        </Box>
      </Grid>
    </Grid>
  );
}




const app = document.getElementById('app');
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Homepage />
  </MuiThemeProvider>,
  app
);

export default Homepage;