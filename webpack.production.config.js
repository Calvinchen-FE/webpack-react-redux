var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();
var config = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,

      // There is not need to run the loader through
      // vendors
      // 这里再也不需通过任何第三方来加载
      exclude: [node_modules_dir],
      loader: 'babel',
      query: {
            presets: ['es2015','react']
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name]-[hash].js'),
    assetsPluginInstance
  ]
};

module.exports = config;