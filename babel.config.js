module.exports = {
    presets: [
        ['@babel/preset-react'],
        ['@babel/preset-env']
    ],
    //presets(预设)无法解析的 需要装对应插件
    plugins: [
        [
            '@babel/plugin-proposal-export-namespace-from',
        ],
        [
            '@babel/plugin-transform-typescript',
            {
                isTSX: true,
                allowNamespaces: true,
            },
        ],
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
    ]
};
