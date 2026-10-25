const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
});
