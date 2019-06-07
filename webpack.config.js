module.exports = {
	module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
