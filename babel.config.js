module.exports = {
    presets: [
        ['@babel/preset-typescript'],
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
        //antd按需加载
        [
            'import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }
        ]
    ]
};
