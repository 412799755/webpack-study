const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin =require('./plugin/MyExmapleWebpackPlugin');
const fileListPlugin =require('./plugin/fileListPlugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    mode:'development',
    entry: {
            index:   './src/index.js',
        },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html')
        }),
        new HelloWorldPlugin({ options: true }),
        new fileListPlugin({ options: true }),
    ],
    output:{
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    // devtool: 'inline-source-map',
    optimization:{
        // splitChunks:{
        //     chunks:'all'
        // }
        runtimeChunk: 'single'
    },
    devServer: {
        contentBase:'./dist'
    },
    module:{
        rules: [
            {
                test:/\.js$/,
                use: {
                    loader: path.resolve(__dirname,'./loader/drop-console.js'),
                }
            },
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.txt$/,
                use: {
                    loader: path.resolve(__dirname, './loader/txt-loader.js'),
                    options: {
                        name: 'luoy'
                    }
                }
            }
        ]
    }
}
