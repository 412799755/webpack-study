const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: {
            index:   './src/index.js',
        },
    plugins: [
        new HtmlWebpackPlugin({title:'Caching'})
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
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.txt$/,
                use: {
                    loader: path.resolve(__dirname, './txt-loader.js'),
                    options: {
                        name: 'YOLO'
                    }
                }
            }
        ]
    }
}
