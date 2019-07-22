const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    publicPath: '/',
    contentBase: './dist',
    compress: true,
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    port: 9000,
    open: true,
    hot: true,
  },
});
