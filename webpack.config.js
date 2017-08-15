const path = require('path');
const webpack = require('webpack');

const environment = process.env.NODE_ENV;
const isProd = environment === 'production';
const plugins = isProd ? [] : [
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
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
});
