const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;
const commonConfig = require('./webpack.common');
const package = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode : 'production',
    output : {
        filename : '[name].[contenthash].js'
    },
    plugins:[
        new ModuleFederationPlugin({
            name : "container",
            remotes : {
              'marketing' : `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: package.dependencies
          })
    ]
}

module.exports = merge(commonConfig,prodConfig);