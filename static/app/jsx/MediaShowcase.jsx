// import React from 'react';
// import { css } from '@emotion/react';
// import { Grid, Typography, Card, CardMedia } from '@mui/material';
// import media1Image from '../../images/media-1.jpg';
// import media2Image from '../../images/media-2.jpg';
// import media3Image from '../../images/media-3.jpg';

// const MediaShowcaseStyles = css`
//   .media-showcase {
//     margin-bottom: 40px;
//   }

//   .media-showcase__title {
//     text-align: center;
//     margin-bottom: 20px;
//   }

//   .media {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }

//   .media__image {
//     width: 200px;
//     height: 300px;
//     object-fit: cover;
//     margin-bottom: 20px;
//   }

//   .media__title {
//     font-size: 20px;
//   }

//   .media__description {
//     font-size: 16px;
//     max-width: 400px;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   @media (max-width: 600px) {
//     .media {
//       flex-direction: column;
//       align-items: center;
//     }

//     .media__image {
//       width: 150px;
//       height: 225px;
//     }

//     .media__title {
//       font-size: 18px;
//     }

//     .media__description {
//       font-size: 14px;
//     }
//   }
// `;

// function MediaShowcase() {
//   return (
//     <div css={MediaShowcaseStyles} className="media-showcase">
//       <Typography variant="h4" className="media-showcase__title">
//         Featured Media
//       </Typography>
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={4}>
//           <Card className="media">
//             <CardMedia
//               image={media1Image}
//               title="Media 1"
//               className="media__image"
//             />
//             <Typography variant="h5" className="media__title">
//               Media 1
//             </Typography>
//             <Typography variant="body2" className="media__description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Maecenas auctor, dui sed dictum fermentum, dui purus
//               fermentum est, nec lobortis diam enim in ipsum.
//             </Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card className="media">
//             <CardMedia
//               image={media2Image}
//               title="Media 2"
//               className="media__image"
//             />
//             <Typography variant="h5" className="media__title">
//               Media 2
//             </Typography>
//             <Typography variant="body2" className="media__description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Maecenas auctor, dui sed dictum fermentum, dui purus fermentum est, nec lobortis diam enim in ipsum.
//             </Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card className="media">
//             <CardMedia
//               image={media3Image}
//               title="Media 3"
//               className="media__image"
//             />
//             <Typography variant="h5" className="media__title">
//               Media 3
//             </Typography>
//             <Typography variant="body2" className="media__description">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Maecenas auctor, dui sed dictum fermentum, dui purus
//               fermentum est, nec lobortis diam enim in ipsum.
//             </Typography>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default MediaShowcase;


import React from 'react';
import { css } from '@emotion/react';
import { Grid, Typography, Card, CardMedia } from '@mui/material';
import media1Image from '../../images/media-1.jpg';
import media2Image from '../../images/media-2.jpg';
import media3Image from '../../images/media-3.jpg';

const MediaShowcaseStyles = css`
  .media-showcase {
    margin-bottom: 40px;
  }

  .media-showcase__title {
    text-align: center;
    margin-bottom: 20px;
  }

  .media {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .media__image {
    max-width: 100%;
    max-height: auto;
    margin-bottom: 20px;
  }

  .media__title {
    font-size: 20px;
  }

  .media__description {
    font-size: 16px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 600px) {
    .media {
      flex-direction: column;
      align-items: center;
    }

    .media__title {
      font-size: 18px;
    }

    .media__description {
      font-size: 14px;
    }
  }
`;

function MediaShowcase() {
  return (
    <div css={MediaShowcaseStyles} className="media-showcase">
      <Typography variant="h4" className="media-showcase__title">
        Featured Media
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card className="media">
            <CardMedia
              image={media1Image}
              title="Media 1"
              className="media__image"
            />
            <Typography variant="h5" className="media__title">
              Media 1
            </Typography>
            <Typography variant="body2" className="media__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor, dui sed dictum fermentum, dui purus
              fermentum est, nec lobortis diam enim in ipsum.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="media">
            <CardMedia
              image={media2Image}
              title="Media 2"
              className="media__image"
            />
            <Typography variant="h5" className="media__title">
              Media 2
            </Typography>
            <Typography variant="body2" className="media__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas auctor, dui sed dictum fermentum, dui
                purus fermentum est, nec lobortis diam enim in ipsum.
            </Typography>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Card className="media">
                    <CardMedia
                        image={media3Image}
                        title="Media 3"
                        className="media__image"
                    />
                    <Typography variant="h5" className="media__title">
                        Media 3
                    </Typography>
                    <Typography variant="body2" className="media__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas auctor, dui sed dictum fermentum, dui purus
                        fermentum est, nec lobortis diam enim in ipsum.
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    </div>
    );
}

export default MediaShowcase;


    
