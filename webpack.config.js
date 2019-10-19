var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index_bundle.js"
  },

  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(js)$/, use: ['babel-loader']},
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      }
    ]
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
