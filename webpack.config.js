const path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        index2: './src/index2.js',
    },
    output: {
        publicPath: '../dist/', //服务器根路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.RuntimeChunkPlugin({
            name: "common"
        })
    ]
};