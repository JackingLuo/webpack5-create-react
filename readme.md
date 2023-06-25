## 使用webpack5搭建react开发环境

>   1.初始化项目

    npm init -y 
    pnpm add webpack webpack-cli webpack-dev-server -D

>   2.创建webpack配置文件以及配置项目的entry,output,plugins,module

    touch webpack.config.js

>   3.修改package.json文件，增加启动和打包命令

    "webpack server --config webpack.config.js"
    "webpack --config webpack.config.js"

    pnpm add webpack-merge webpackbar -D

>   4.创建html文件，而后在webpack配置文件的plugins中增加解析html的插件html-webpack-plugin
    
    pnpm add html-webpack-plugin -D

>   5.增加css和scss，以及配置对应的loader

    pnpm add sass node-sass sass-loader -D
    pnpm add style-loader css-loader -D

    //安装css分离插件
    pnpm add mini-css-extract-plugin -D

>   6.安装react相关包

    pnpm add react react-dom react-router-dom -S
    //安装lodash和antd
    pnpm add antd lodash -S

>   7.增加babel编译器的预设和插件编译es5以上代码

    pnpm add  @babel/core babel-loader thread-loader -D
    pnpm add @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-proposal-export-namespace-from @babel/plugin-transform-typescript -D

>   8.安装eslint规范编码

    //eslint不建议升级到v8
    pnpm add eslint eslint-webpack-plugin -D
    //下面的预设和插件可以单独抽成一个公共包(除了@types/react)
    pnpm add @babel/eslint-parser eslint-plugin-react eslint-plugin-react-hooks -D
    pnpm add @types/react typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin -D//配置typescript

>   9.引入compression-webpack-plugin优化打包

    pnpm add compression-webpack-plugin -D

>  10.antd按需加载

    pnpm add babel-plugin-import  -D
    pnpm add babel-plugin-lodash -D //lodash按需加载
