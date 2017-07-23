const path = require('path');
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "app.bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_component)/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', 'react']]
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    publicPath: '/',    
    inline: true,
    contentBase: "./public",
  }
}