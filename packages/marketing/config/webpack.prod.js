const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const package = require('../package.json');

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js',
        publicPath : '/marketing/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name : 'marketing',
            filename : 'remoteEntry.js',
            exposes : {
                './MarketingApp' : './src/bootstrap'
            },
            shared : package.dependencies
        }),
    ]
}

module.exports = merge(commonConfig,prodConfig);