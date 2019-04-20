const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "/public")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // not necessary at this stage (in this task not using fonts, images, etc.)
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // inline for smaller then 10 kb
              limit: 10 * 1024,
              noquotes: true,
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      inject: true,
      template: 'src/index.html',
    }),
    new CircularDependencyPlugin ({
      exclude: /a\.js|node_modules/,
      failOnError: false, // show only warning
    })
  ],
  devtool: 'source-map',
};

