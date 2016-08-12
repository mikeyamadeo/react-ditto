var path = require('path')
var appPath = path.resolve(__dirname, 'examples', 'index.js')
var buildPath = path.resolve(__dirname, 'examples', '__build__')

module.exports = {
  entry: appPath,

  output: {
    filename: 'bundle.js',
    path: buildPath,
    publicPath: '__build__'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }
}
