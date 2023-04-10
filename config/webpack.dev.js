const webpack = require('webpack');
const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    cache: {
        type: 'memory'
    },
    devtool: 'source-map',
    devServer: {
        host: '127.0.0.1',
        port: '8099',
        client: {
            overlay: {
                errors: true, //如果有错误需要阻断运行
                warnings: false, //eslint警告不用阻断代码流程
            }
        },
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8088',
                pathRewrite: { '^/api': '' },
                changeOrigin: true
            },
        },
        historyApiFallback: true
    },
    plugins: [
        //在webpack中集成eslint
        new EslintWebpackPlugin({
            eslintPath: 'eslint',
            extensions: ['js', 'ts', 'jsx', 'tsx'],
            exclude: ['node_modules', 'dist', 'true'],
            fix: true, //是否自动修复
            formatter: 'stylish'
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            // manifest就是我们第一步中打包出来的json文件
            manifest: require(path.resolve(__dirname, '../', 'dll/vendor-manifest.json')),
        })
    ]
};