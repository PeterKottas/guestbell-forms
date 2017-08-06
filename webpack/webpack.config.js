const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    externals: {
        "react": "react",
        "prop-types": "prop-types"
    }
});
