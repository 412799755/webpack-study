const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry:{
        'assets/js/home':path.resolve(__dirname,'./src/pages/home/main.js'),
        'assets/js/about': path.resolve(__dirname, './src/pages/about/main.js')
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname,'./bulid')
    },
    plugins: []
}