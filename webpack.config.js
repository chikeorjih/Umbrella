var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'umbrella.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("css-loader!sass-loader")
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin("css/umbrella.css")
  ],
  devServer: {
    port: 3000
  }
};
