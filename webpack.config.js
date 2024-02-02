const path = require('path')
module.exports = {
	mode: 'production',
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env']
						]
					}
				}
			}
		]
	},
	watch: true
}