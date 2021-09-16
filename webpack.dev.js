const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = __dirname + '/src/';
const DIST_DIR = __dirname + '/dist';

module.exports = merge(common, {
    mode: 'development',
    performance: {hints: false},
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: true
        }),
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
    devServer: {
        static:{
            directory: path.resolve(__dirname, './dist'),
        },
        hot: true,
        compress:true,
        port: 9999,
        client:{
            progress:true,
            overlay:true,
        },
        devMiddleware:{
            serverSideRender: true,
            writeToDisk: true,
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
});
