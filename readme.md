## 使用webpack5搭建react开发环境

>   1.初始化项目

    npm init
    npm webpack webpack-cli webpack-dev-server -D

>   2.创建webpack配置文件以及项目的入口文件


>   3.修改package.json文件，增加启动和打包命令

    npm i webpack-merge webpackbar -D

>   4.创建html文件，而后在webpack配置文件的plugins中增加解析html的插件html-webpack-plugin
    
    npm i html-webpack-plugin -D

>   5.增加css和scss，以及配置对应的loader

    npm i sass node-sass sass-loader -D
    npm i style-loader css-loader -D

    //安装css分离插件
    npm i mini-css-extract-plugin -D

>   6.安装react相关包

    npm i react react-dom -S

>   7.增加babel编译器的预设和插件编译es5以上代码

    npm i  @babel/core @babel/preset-env @babel/preset-react babel-loader -D
    npm i  @babel/plugin-proposal-decorators @babel/plugin-proposal-export-namespace-from @babel/plugin-transform-typescript  -D

>   8.安装eslint规范编码

    npm i eslint-webpack-plugin -S
    npm i eslint eslint-plugin-cypress eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks -D
