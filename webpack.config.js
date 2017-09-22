const _ = require('lodash')
const path = require('path')
const webpack = require('webpack')
const pkg = require('./package')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
require('dotenv').config()

// Webpack: The Confusing Parts
// https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9
const isDevelopment = process.env.NODE_ENV === 'development'

const envKeys = [ 'API_HOST', 'API_PORT', 'NODE_ENV' ]
const envValues = _.map(envKeys, key => JSON.stringify(process.env[key]))

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': _.zipObject(envKeys, envValues)
  }),
  new ExtractTextPlugin(`${pkg.name}.css`)
]

if (!isDevelopment) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true
    },
    compress: { screw_ie8: true },
    comments: false
  }))
}

// this default is production
const production = {
  devtool: 'source-map',
  entry: {
    [pkg.name]: ['babel-polyfill', './src/index']
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          { loader: 'babel-loader', options: { sourceMap: true } },
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', 
              options: {
                plugins () {
                  return [autoprefixer('last 2 versions')]
                },
                sourceMap: true
              }
            },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          { loader: 'url-loader', options: { limit: 100000 } }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins
}

let config = _.cloneDeep(production)

if (isDevelopment) {
  _.assign(config, {
    devtool: 'eval',
    devServer: {
      contentBase: path.join(__dirname, 'www'),
      inline: true,
      historyApiFallback: {
        index: 'index.html'
      },
      host: '0.0.0.0',
      watchOptions: {
        ignored: [
          /node_modules/,
          /mocks/,
          /tests/,
          /www/
        ]
      },
    }
  })

  // despite webpack-dev-server not actually outputting a file, without this, webpack will throw a misguided error about loaders
  _.set(config, 'output.filename', `${pkg.name}.js`)
}

module.exports = config
