const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    //path: path.resolve(__dirname, "dist"),
    filename: "./dist/app.bundle.js"
  },
  module: {
    rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
    },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
    inline: true
  }
}