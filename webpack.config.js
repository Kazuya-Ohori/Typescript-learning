const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config({ path: __dirname + "/.env" });
const htmlTemplate = path.join("./src/index.pug");
module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"), //dist/html/以下のindex.htmlを参照
    },
    devtool: "inline-source-map",
    module: {
        rules: [{
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                use: {
                    loader: "pug-loader",
                    options: { self: true, pretty: true },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                API_KEY: JSON.stringify(process.env.API_KEY),
            },
        }),
        new HtmlWebpackPlugin({
            template: htmlTemplate,
            filename: "index.html",
            inject: "head",
            scriptLoading: "defer",
            data: process.env.API_KEY,
        }),
    ],
};