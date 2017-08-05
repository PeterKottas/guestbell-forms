const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');

const extractSass = new ExtractTextPlugin({
    filename: "site.css",
    disable: isLocalBuild
});

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
    externals: {}
});
