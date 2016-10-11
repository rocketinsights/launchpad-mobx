const path = require('path')
const webpack = require('webpack')

// Webpack: The Confusing Parts
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }]
  }
}
