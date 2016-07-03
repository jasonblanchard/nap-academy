/* eslint-disable no-shadow, global-require */
function path(path) {
  return require('path').join(__dirname, path);
}

module.exports = {
  entry: {
    app: path('src/app/index.js'),
  },
  output: {
    path: path('public/build'),
    filename: '[name].js',
    publicPath: '/build/',
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: path('src'),
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [
          path('src'),
        ],
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
};
