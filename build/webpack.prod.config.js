const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: {
        // app: [
        //     "@babel/polyfill",
        //     path.join(__dirname, '../src/index.js')
        // ],
        app: [
            "@babel/polyfill",
            path.join(__dirname, '../src/index.js')
        ],
        dnd: [
            "@babel/polyfill",
            path.join(__dirname, '../src/dndindex.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js',
    },
    devtool: 'none',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },
        {
            test: /\.less$/i,
            loader: [
                // compiles Less to CSS
                "style-loader",
                "css-loader",
                "less-loader",
            ],
        },
        {
            test: /\.css$/,
            use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader?modules', "postcss-loader"]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }
        ],

    },
    resolve: {
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            components: path.join(__dirname, '../src/components'),
            router: path.join(__dirname, '../src/router'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
            images: path.join(__dirname, '../src/images')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'dnd.html',
            chunks: ['dnd'],
            title: '拖一只马',
            template: path.join(__dirname, '../public/dndindex.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['app'],
            title: '主页',
            template: path.join(__dirname, '../public/index.html')
        }),
        new MiniCssExtractPlugin({ // 压缩css
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
        new OptimizeCssAssetsPlugin(),

        new webpack.DefinePlugin({
            'process.env.uat': true
        }),
        new CleanWebpackPlugin(), // 每次打包前清空
    ]

};
