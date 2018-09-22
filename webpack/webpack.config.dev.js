const path = require('path');
const webpack = require('webpack');
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let htmlPluginOptions = {
    alwaysWriteToDisk: true,
    filename: 'index.html',
    template: './src/demo/ClientApp/index.template.ejs',
};

module.exports = merge(
    {
        customizeArray(a, b, key) {
            if (key === 'plugins') {
                return a.concat(b);
            }

            // Fall back to default merging
            return undefined;
        },
        customizeObject(a, b, key) {
            if (key === 'entry') {
                return b;
            }

            // Fall back to default merging
            return undefined;
        }
    }
)(require('./webpack.config.base'), {
    entry: {
        'main': './src/demo/ClientApp/Main.tsx'
    },
    output: {
        path: path.join(__dirname, '..', 'src', 'demo', 'wwwroot'),
        publicPath: '/',
        filename: 'dist/[name].[hash].js'
    },
    serve: {
        port: 8080,
        clipboard: false,
        content: path.join(__dirname, '..', 'src', 'demo', 'wwwroot'),
        open: true,
        add: (app, middleware, options) => {
            const historyOptions = {
                // ... see: https://github.com/bripkens/connect-history-api-fallback#options
            };

            app.use(convert(history(historyOptions)));
        },
    },
    externals: {},
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['src/demo/ClientApp/wwwroot'], {
            root: path.join(__dirname, '..')
        }),
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin(htmlPluginOptions),
        new CopyWebpackPlugin([
            {
                from: './src/demo/ClientApp/assets/favicon/icons',
                to: 'dist/icons'
            }
        ])
    ]
});
