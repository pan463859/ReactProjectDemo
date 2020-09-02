const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    mode: 'development',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'), 
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot:true, // 热更新
        historyApiFallback:true, // 解决启动后刷新404
        port: 8000 // 端口
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    }
};
