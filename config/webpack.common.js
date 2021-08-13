const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "js/[name].[fullhash].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html"
        })
    ]
};
