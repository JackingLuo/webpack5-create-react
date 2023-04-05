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
        historyApiFallback: true,
    },
    plugins: [
        //在webpack中集成eslint
        new EslintWebpackPlugin({
            eslintPath: 'eslint',
            extensions: ['js', 'ts', 'jsx', 'tsx'],
            exclude: ['node_modules'],
            fix: true, //是否自动修复
            formatter: 'stylish'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,
            },
        ]
    }
};