/*
 * @Author: Grizz 
 * @Date: 2019-05-09 11:20:29 
 * @Last Modified by: Grizz
 * @Last Modified time: 2019-05-10 16:30:25
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//把html打包的工具
const ExtractTextPlugin = require('extract-text-webpack-plugin')//把css文件单独打包的插件,以link标签插入html。默认打包会插入到js中，造成后加载导致白屏
const webpack = require('webpack')
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            //css文件的处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            //sacc文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader" },
                        { loader: 'sass-loader' }
                    ]
                })
            },
            //图片文件的处理 注意file-loader和url-loader的区别 //文件大于8k就转文件，否则就是base64
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //字体和字体图标文件的处理
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }

        ]

    },
    plugins: [
        //处理html文件
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        ),
        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })

    ],
    //提供一个简单的web服务器,能够实时的重新加载
    devServer: {
        port:8086
    }
}