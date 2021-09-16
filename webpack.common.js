const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");
const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts']
    },
    entry: {
        bundle: SRC_DIR + '/index',
        scripts: SRC_DIR + '/scripts',
        ts: SRC_DIR + '/main',  
        vuejs: SRC_DIR + '/vue/main'   
        // polyfills: SRC_DIR + '/angular-polyfills.ts',
        // angular: SRC_DIR + '/angular.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].[hash:8].js'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader'

            },

            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    esModule: false
                }
            },
         
            {
                test: /\.(ttf|eot|woff)/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
            {

                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [

                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread"
                        ]
                    }
                }
            },

            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [
                     MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            url: false
                        }
                    },

                ]
            },
            {
                test: /\.(html)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
          

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'opttimusdev.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new VueLoaderPlugin()
      
       

    ],
    stats: {
        assetsSort: "chunks",
        builtAt: true,
        children: false,
        chunkGroups: true,
        chunkOrigins: true,
        colors: false,
        errors: true,
        errorDetails: true,
        env: true,
        modules: false,
        performance: true,
        providedExports: false,
        source: false,
        warnings: true
    }
};