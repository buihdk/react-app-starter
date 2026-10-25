const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        type: 'asset/resource',
        generator: { filename: 'static/images/[name].[contenthash:7][ext]' },
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: { filename: 'static/fonts/[name].[contenthash:7][ext]' },
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(wav|mp3)$/,
        type: 'asset/resource',
        generator: { filename: 'static/audio/[name].[contenthash:7][ext]' },
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      public: path.resolve(__dirname, 'public'),
      app: path.resolve(__dirname, 'src/app'),
      components: path.resolve(__dirname, 'src/components'),
      locales: path.resolve(__dirname, 'src/locales'),
      modules: path.resolve(__dirname, 'src/modules'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
      services: path.resolve(__dirname, 'src/services'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv(),
    new ESLintPlugin({ extensions: ['js', 'jsx'], context: 'src', cache: true }),
  ],
};
