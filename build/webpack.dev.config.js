const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js')
        ],
        dnd: [
            path.join(__dirname, '../src/dndindex.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    devServer: {
        proxy: { // 配置服务代理
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },  //可转换
                changeOrigin: true
            }
        },
        contentBase: path.join(__dirname, '../dist'),
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot: true, // 热更新
        historyApiFallback: true, // 解决启动后刷新404
        port: 8000 // 端口
    },
    devtool: 'inline-source-map',
    module: {
        rules:
            [
                {
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
        },
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
        new webpack.DefinePlugin({
            'process.env.uat': false
        }),
    ]

};
