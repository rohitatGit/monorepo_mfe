const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const package = require('../package.json');

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js',
        publicPath : '/auth/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name : 'auth',
            filename : 'remoteEntry.js',
            exposes : {
                './AuthApp' : './src/bootstrap'
            },
            shared : package.dependencies
        }),
    ]
}

module.exports = merge(commonConfig,prodConfig);