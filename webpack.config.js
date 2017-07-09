const { resolve } = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'dist')
  }
}