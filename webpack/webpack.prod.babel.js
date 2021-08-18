import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base";

export default merge(baseConfig, {
    mode: "production",

    target: "web",

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },

    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],

        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },

    plugins: [
        new BundleAnalyzerPlugin(),

        new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, "../public"),
                    globOptions: {
                        ignore: ["**/index.html"]
                    },
                    to: path.join(__dirname, "../build")
                }
            ]
        })
    ]
});
