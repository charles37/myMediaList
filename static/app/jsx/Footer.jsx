import React from 'react';
import { css } from '@emotion/react';
import { Box, Typography } from '@mui/material';

const FooterStyles = css`
  .footer {
    background-color: #333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0;
  }

  .footer__text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .footer__links {
    display: flex;
    justify-content: center;
  }

  .footer__link {
    color: white;
    margin-left: 20px;
    margin-right: 20px;
  }

  .footer__link:hover {
    color: #f0f0f0;
  }

  @media (max-width: 600px) {
    .footer {
      padding: 30px 0;
    }

    .footer__text {
      font-size: 16px;
    }
  }
`;

function Footer() {
  return (
    <Box css={FooterStyles} className="footer">
      <Typography variant="body2" className="footer__text">
        Copyright &copy; 2021 MyMediaList
      </Typography>
      <nav className="footer__links">
        <a href="#" className="footer__link">
          About
        </a>
        <a href="#" className="footer__link">
          Contact
        </a>
        <a href="#" className="footer__link">
          Privacy Policy
        </a>
        <a href="#" className="footer__link">
        Terms of Service
        </a>
      </nav>
    </Box>
  );
}

export default Footer;
