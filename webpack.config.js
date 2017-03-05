const path = require('path')

module.exports = {
  entry: './src/root.re',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: "/assets/"
  },
  module: {
    rules: [
      { test: /.(re|ml)$/, use: 'bs-loader' },
    ]
  },
  resolve: {
    extensions: ['.re', '.ml', '.js']
  }
}
