const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
var isLocalBuild = process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim().toString() == 'local';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: { 'guestbell-forms': './src/lib/index.ts' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                use: 'awesome-typescript-loader?silent=true'
            },
            {
                test: /\.(scss|css)$/,
                use: [(isLocalBuild ? {
                    loader: "style-loader",
                    options: {
                        sourceMap: true,
                    }
                } : {
                    loader: MiniCssExtractPlugin.loader
                }), {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: "postcss-loader",
                    options: {
                        sourceMap: true,
                        plugins: (loader) => [
                            require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions']
                            })
                        ]
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                    }
                }]
            },
            {
                test: /\.(svg)$/,
                use: {
                    loader: 'svg-react-loader',
                    query: {
                        props: {
                            className: 'material-design-icon'
                        }
                    }
                },
                include: /material-design-icons/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=8192&name=images/[name]-[hash].[ext]',
                exclude: /material-design-icons/
            }
        ]
    },
    output:
    {
        path: path.join(__dirname, '../build'),
        filename: '[name].js',
        publicPath: '../build/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
        libraryTarget: 'umd'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new CheckerPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative('../build', '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        }),
        //new DtsBundlePlugin()
    ]
};


function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'guestbell-forms',
            main: 'src/lib/index.d.ts',
            out: '../index.d.ts',
            //removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
};