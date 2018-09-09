const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
    entry:
    {
        'main': './src/demo/ClientApp/Main.tsx'
    },
    output: {
        path: path.join(__dirname, 'src', 'demo', 'wwwroot', 'dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    externals: {},
    mode: 'development',
    devtool: 'inline-source-map'
});
