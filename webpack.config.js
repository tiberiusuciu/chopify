var webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=true',
		'./src/index.js'
	],
	output: {
		path: require('path').resolve('./dist'),
		filename: 'main.js',
		publicPath: '/'
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    htmlPlugin,
		new webpack.HotModuleReplacementPlugin(),
  ]
};