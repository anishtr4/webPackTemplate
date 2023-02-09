const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  devtool: false,

  // optimization: {
  //   // splitChunks: { name: 'vendor', chunks: 'all' },

  //   splitChunks: {
  //     chunks: 'all',
  //     name: 'vendor',
  //   },
  // },
  optimization: {
    //runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
  output: {
    // filename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
