const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        port: 3000,
        compress: true,
        hot: true
    },
    plugins: [new BundleAnalyzerPlugin({ openAnalyzer: false })]
});
