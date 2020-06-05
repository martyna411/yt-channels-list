const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: ["./src/js/main.js"],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new CopyPlugin([{ from: "./src/channels.json", to: "" }]),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ["babel-loader"],
			},
		],
	},
};
