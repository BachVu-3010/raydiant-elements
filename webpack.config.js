const path = require('path');

module.exports = () => ({
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
