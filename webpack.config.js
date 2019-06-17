const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: {
            app:   './src/index.js',
            print:   './src/print.js',
        },
    plugins: [
        new HtmlWebpackPlugin({title:'webpack-study'})
    ],
    output:{
        filename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    // devtool: 'inline-source-map',
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
                test:/\.txt$/,
                use:[  {
                    loader: 'file-loader',
                    options: {
                        name:'a.txt'
                    }
                }]
            }
        ]
    }
}
