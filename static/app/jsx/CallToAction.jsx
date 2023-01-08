import React from 'react';
import { css } from '@emotion/react';
import { Box, Typography, Button } from '@mui/material';

const CallToActionStyles = css`
  .call-to-action {
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0;
  }

  .call-to-action__title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .call-to-action__description {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .call-to-action__button {
    background-color: white;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
  }

  .call-to-action__button:hover {
    background-color: #f0f0f0;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 600px) {
    .call-to-action {
      padding: 30px 0;
    }

    .call-to-action__title {
      font-size: 28px;
    }

    .call-to-action__description {
      font-size: 18px;
    }

    .call-to-action__button {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
`;

function CallToAction() {
  return (
    <Box css={CallToActionStyles} className="call-to-action">
        <Typography variant="h3" className="call-to-action__title">
            Join the MyMediaList community today!
        </Typography>
        <Typography variant="h4" className="call-to-action__description">
            Create and manage your own MediaList, compare it with your friends,
            and discover new media to enjoy.
        </Typography>
        <Button variant="contained" className="call-to-action__button">
            Sign Up
        </Button>
    </Box>
    );
}

export default CallToAction;