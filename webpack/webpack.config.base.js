const path = require('path');
const webpack = require('webpack');
var isLocalBuild = process.env && process.env.NODE_ENV && process.env.NODE_ENV.trim().toString() == 'local';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: {
        'guestbell-forms': './src/lib/index.ts',
        'guestbell-forms': './src/lib/scss/index.scss',
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                "@babel/preset-env",
                                { targets: { browsers: "last 2 versions" } } // or whatever your project requires
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
                            // ["@babel/plugin-proposal-decorators", { legacy: true }],
                            ["@babel/plugin-proposal-class-properties", { loose: true }],
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            /*{
                test: /\.tsx?$/,
                include: /src/,
                use: {
                    loader: 'ts-loader',//'awesome-typescript-loader?silent=true',
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true,
                        experimentalWatchApi: true,
                    }
                }
            },*/
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
        path: path.join(__dirname, '../build/dist'),
        filename: '[name].js',
        publicPath: '../build/', // Webpack dev middleware, if enabled, handles requests for this URL prefix
        libraryTarget: 'umd'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new ForkTsCheckerWebpackPlugin(),
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