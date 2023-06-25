const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        // 依赖的库数组
        vendor: [
            'antd',
            'lodash',
            'react',
            'react-dom',
            'react-router-dom',
        ]
    },
    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        library: '[name]_[hash:8]',
    },
    plugins: [
        new webpack.DllPlugin({
            // DllPlugin的name属性需要和libary保持一致
            name: '[name]_[hash:8]',
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            // context需要和webpack.config.js保持一致
            context: __dirname,
        }),
    ],
}