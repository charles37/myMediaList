const path = require('path');


module.exports = (env, argv) => ( {
    entry: {
        homepage: './app/jsx/homepage.jsx',
        footer: './app/jsx/Footer.jsx',
        header: './app/jsx/header.jsx',
        // Hero: './app/jsx/Hero.jsx',
        // CallToAction: './app/jsx/CallToAction.jsx',
        // FeaturedMedia: './app/jsx/FeaturedMedia.jsx',
        // Testimonials: './app/jsx/Testimonials.jsx'
    },
    output: {
    path: path.resolve(__dirname, 'builds'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
});
