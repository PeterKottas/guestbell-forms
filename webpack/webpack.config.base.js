const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env.NODE_ENV === 'local';

const extractSass = new ExtractTextPlugin({
    filename: "site.css",
    disable: isLocalBuild
});

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: { 'guestbell-forms-material': './src/lib/index.ts' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader?silent=true'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: true,
                            importLoaders: 3,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: [
                                'node_modules', '.'
                            ]
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    output:
    {
        path: path.join(__dirname, '../build'),
        filename: '[name].js',
        publicPath: '../build/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    plugins: [
        new ExtractTextPlugin('site.css'),
        new CheckerPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative('../build', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })
    ]
};
