import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { NoEmitOnErrorsPlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";

export default merge(baseConfig, {
    mode: "development",

    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { sourceMap: true } },
                    "sass-loader"
                ]
            }
        ]
    },

    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        open: true
    },

    plugins: [
        new BundleAnalyzerPlugin({ openAnalyzer: false }),

        new NoEmitOnErrorsPlugin(),

        new ReactRefreshWebpackPlugin()
    ]
});
