import React from 'react';
import { css } from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import feature1Image from '../../images/feature-1.jpg';
import feature2Image from '../../images/feature-2.jpg';
import feature3Image from '../../images/feature-3.jpg';

const FeatureListStyles = css`
  .feature-list {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature__image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .feature__title {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .feature__description {
    font-size: 18px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    .feature {
      flex-direction: column;
      align-items: center;
    }

    .feature__image {
      width: 150px;
      height: 150px;
    }

    .feature__title {
      font-size: 18px;
    }

    .feature__description {
      font-size: 16px;
    }
  }
`;

function FeatureList() {
  return (
    <Grid container spacing={4} css={FeatureListStyles} className="feature-list">
      <Grid item xs={12} sm={4}>
        <div className="feature">
          <img
            src={feature1Image}
            alt="Feature 1"
            className="feature__image"
          />
          <Typography variant="h5" className="feature__title">
            Create and manage your MediaList
          </Typography>
          <Typography variant="body2" className="feature__description">
            Keep track of all the media you've consumed by adding items to your
            MediaList. You can easily add and remove items, as well as edit their
            details.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className="feature">
          <img
            src={feature2Image}
            alt="Feature 2"
            className="feature__image"
          />
          <Typography variant="h5" className="feature__title">
            Compare MediaLists with friends
          </Typography>
          <Typography variant="body2" className="feature__description">
            See what media you have in common with your friends by comparing your
            MediaLists. You can also see the MediaLists of other users on the
            site.
          </Typography>
        </div>
      </Grid>
        <Grid item xs={12} sm={4}>
            <div className="feature">
                <img
                    src={feature3Image}
                    alt="Feature 3"
                    className="feature__image"
                />
                <Typography variant="h5" className="feature__title">
                    Search for media
                </Typography>
                <Typography variant="body2" className="feature__description">
                    Search for media by title, genre, or year. You can also filter
                    your search results by media type.
                </Typography>
            </div>
        </Grid>
    </Grid>
    );
}

export default FeatureList;
