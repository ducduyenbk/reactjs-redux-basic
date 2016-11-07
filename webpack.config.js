/* eslint-disable global-require, react/jsx-first-prop-new-line */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
        index: path.join(__dirname, "src/index")
  },
  output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].bundle.js"
  },
  module: {
      loaders: [
          {
              test: /(\.js|\.jsx)$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'stage-0', 'react']
              }
          },
          {
            test: /(\.css)$/,
            loader: 'style-loader!css-loader'
          },
          {
            test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
            loader: 'file-loader?name=[path][name].[ext]'
          }
      ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      alias: {
          react: path.resolve(__dirname, 'node_modules', 'react'),
          'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
      }
  },
  externals: {
      'react': 'React',
      'react-dom': 'React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin('index', null, false)
  ]
};
