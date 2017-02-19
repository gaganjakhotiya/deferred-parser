var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "build")
	},
	resolve: {
		extensions: ['js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'deferred-parser',
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					},
				]
			}
		]
	},
	resolveLoader: {
		alias: {
			'deferred-parser': path.join(__dirname, "../index.js")
		}
	}
}