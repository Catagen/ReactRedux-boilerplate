/* eslint-disable */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
});
