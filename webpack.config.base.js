const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');

module.exports = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template,
      inject: false,
      appMountId: 'app',
      mobile: true,
    }),
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          // eslint-disable-next-line no-useless-escape
          test: /[\\\/]node_modules[\\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
