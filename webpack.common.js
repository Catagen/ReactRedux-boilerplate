/* eslint-disable */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
		],
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1']
				}
			},
			{
				test: /\.(sass|scss)$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(html)$/,
				loader: 'html-loader'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
    },
}
