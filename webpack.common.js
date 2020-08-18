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
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: /src/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
