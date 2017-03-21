const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')

// Webpack: The Confusing Parts
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9
const isDevelopment = process.env.NODE_ENV === 'development'

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
]

if (!isDevelopment) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

// this default is production
const production = {
  devtool: 'source-map',
  entry: {
    'launchpad-mobx': './src/index'
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap&importLoaders=1',
          'postcss-loader',
          'sass?sourceMap'
        ],
        include: [
          path.resolve(__dirname, 'src/styles')
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins,
  postcss: function () {
    const autoPrefixerOptions = {
      browsers: ['last 2 versions']
    }

    return [
      require('autoprefixer')(autoPrefixerOptions)
    ]
  }
}

let config = _.cloneDeep(production)

if (isDevelopment) {
  _.assign(config, {
    devtool: 'eval',
    entry: [
      'react-hot-loader/patch',
      './src/index'
    ],
    devServer: {
      host: '0.0.0.0',
      port: '8080', // 8080 is default
      historyApiFallback: true
    }
  })

  // despite webpack-dev-server not actually outputting a file, without this, webpack will throw a misguided error about loaders
  _.set(config, 'output.filename', 'launchpad-mobx.js')
}

module.exports = config
