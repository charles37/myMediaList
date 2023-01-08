import React from 'react';
import { css } from '@emotion/react';
import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import heroImage from '../../images/hero.jpg';

const HeroBannerStyles = css`
  .hero-banner {
    background-image: url(${heroImage});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-banner__title {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 48px;
    margin-bottom: 20px;
  }

  .hero-banner__subtitle {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 24px;
    margin-bottom: 20px;
  }

  .hero-banner__button {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
  }

  .hero-banner__button:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    .hero-banner {
      height: 300px;
    }

    .hero-banner__title {
      font-size: 36px;
    }

    .hero-banner__subtitle {
      font-size: 18px;
    }
  }
`;

function HeroBanner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box css={HeroBannerStyles} className="hero-banner">
      <Container maxWidth="md">
        <Typography variant={isSmallScreen ? 'h4' : 'h2'} className="hero-banner__title">
          MyMediaList
        </Typography>
        <Typography variant="subtitle1" className="hero-banner__subtitle">
          Keep track of all the media you've consumed and compare with your friends.
        </Typography>
        <Button variant="contained" className="hero-banner__button">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default HeroBanner;