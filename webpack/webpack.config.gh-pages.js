const path = require('path');
const webpack = require('webpack');
var isLocalBuild = process.env.NODE_ENV === 'local';
const merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var _ = require('lodash');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let htmlPluginOptions = {
  alwaysWriteToDisk: true,
  filename: 'index.html',
  template: './src/demo/ClientApp/index.template.ejs',
};

module.exports = merge(
  {
    customizeArray(a, b, key) {
      if (key === 'plugins') {
        a = _.remove(a, function (plugin) {
          // console.log(JSON.stringify(plugin));
          return !(plugin.options && plugin.options.filename === '[name].css');
        });
        return a.concat(b);
      }

      // Fall back to default merging
      return undefined;
    },
    customizeObject(a, b, key) {
      if (key === 'entry') {
        // Custom merging
        return b;
      }

      if (key === 'output') {
        // Custom merging
        return b;
      }

      // Fall back to default merging
      return undefined;
    }
  }
)(require('./webpack.config.base'), {
  entry:
  {
    'main': './src/demo/ClientApp/Main.tsx'
  },
  output: {
    path: path.join(__dirname, '..', 'docs'),
    publicPath: '/guestbell-forms',
    filename: 'dist/[name].[hash].js',
  },
  externals: {},
  plugins: [
    new CleanWebpackPlugin(['docs'], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin(htmlPluginOptions),
    new CopyWebpackPlugin([
      {
        from: './src/demo/ClientApp/assets/favicon/icons',
        to: 'dist/icons'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "dist/[name].[hash].css",
    }),
  ],
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
