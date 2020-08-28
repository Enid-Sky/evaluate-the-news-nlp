const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')


module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    stats: 'verbose',
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['miniCSSExtractPlugin.loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpeg|png|jpg|JPG|gif)$/,
                loader: 'url-loader',
            }
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            //entry point refernece
            template: "./src/client/views/index.html",
            //automatically creates an index.html file in the dist folder using the template reference
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}