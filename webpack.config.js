var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');
//var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
//var pathToReactDom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

var config = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'index.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/, 
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
            presets: ['es2015','react']
      }
    }]
  }
};

module.exports = config;