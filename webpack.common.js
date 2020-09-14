const path = require('path');
const Dotenv = require('dotenv-webpack');

const FILE_LOADER = 'file-loader';

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              cache: true,
              eslintPath: 'eslint',
              resolvePluginsRelativeTo: __dirname,
            },
            loader: 'eslint-loader',
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
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
        use: [
          {
            loader: FILE_LOADER,
            options: {
              name: '[name].[sha512:hash:base64:7].[ext]',
              outputPath: 'static/images',
            },
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: FILE_LOADER,
            options: {
              name: '[name].[sha512:hash:base64:7].[ext]',
              outputPath: 'static/fonts',
            },
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(wav|mp3)$/,
        use: [
          {
            loader: FILE_LOADER,
            options: {
              name: 'static/audio/[name].[sha512:hash:base64:7].[ext]',
            },
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      public: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new Dotenv()],
};
