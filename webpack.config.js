/**
 * webpack配置
 */
const { merge } = require('webpack-merge');
const base = require('./config/webpack.base.js');
const dev = require('./config/webpack.dev.js');
const server = require('./config/webpack.server.js');

//publicPath的路径设置必须是在根目录

module.exports = function ({ development }) {
    return merge(base, { output: { publicPath: '/' } }, development ? dev : server);
};
