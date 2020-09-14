const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: ['webpack-dev-server/client?http://0.0.0.0:3000', 'webpack/hot/only-dev-server', './src/index.jsx'],
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
});
