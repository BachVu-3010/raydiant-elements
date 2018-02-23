const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV;
const isProd = environment === 'production';
const plugins = isProd
  ? []
  : [
      new webpack.LoaderOptionsPlugin({
        debug: true,
      }),
    ];
const devtool = isProd ? false : 'source-map';

module.exports = () => ({
  plugins,
  devtool,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mira-elements.js',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    moment: 'moment',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: modulePath =>
          /node_modules/.test(modulePath) &&
          !/node_modules\/react-onclickoutside/.test(modulePath),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    disableHostCheck: true,
  },
});
