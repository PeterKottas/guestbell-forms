const path = require('path');
const webpack = require('webpack');
var isLocalBuild = process.env.NODE_ENV === 'local';
const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
  plugins: [],
  externals: {
    react: 'react',
    'react-ink': 'react-ink',
    'react-onclickoutside': 'react-onclickoutside',
    'react-day-picker': 'react-day-picker',
    'react-datepicker': 'react-datepicker',
    'react-datepicker': 'react-datepicker',
    'react-day-picker/DayPickerInput': 'react-day-picker/DayPickerInput',
    'react-tippy': 'react-tippy',
    'react-textarea-autosize': 'react-textarea-autosize',
  },
  devtool: 'source-map',
  mode: 'development',
});
