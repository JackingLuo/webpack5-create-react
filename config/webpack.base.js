const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
    entry: {
        chunk: ['react', 'react-dom/client'],
        //使用chunk分离第三方包,然后将chunk.js放置到cdn加速
        app: {
            import: path.resolve(__dirname, '../', 'src/main.js'),
            dependOn: 'chunk'
        }
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: 'src/[name].[chunkhash:8].js',
        clean: true //打包后删除之前的文件
    },
    resolve: {
        // 路径别名
        alias: {
            Src: path.resolve(__dirname, '../', 'src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'], //引入时可以忽略的后缀
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../', 'public/index.html'),
            inject: 'body',
            title: 'webpack5搭建react开发环境',
            favicon: path.resolve(__dirname, '../', 'favicon.ico')
        }),
        new WebpackBar({
            // color: "#85d", // 默认green，进度条颜色支持HEX
            basic: false, // 默认true，启用一个简单的日志报告器
        })
    ],
    module: {
        //加载器loader
        rules: [
            {
                test: /\.(jpe?g|png|svg|gif|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'imgs/[name].[contenthash:8][ext]'
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_moduels/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //转换js(x)
            {
                test: /\.jsx?$/,
                exclude: /node_moduels/,
                use: ['babel-loader']
            },
        ]
    }
};