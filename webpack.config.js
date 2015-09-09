module.exports = {

  entry: './example/Main.jsx',

  output: {
    filename: 'bundle.js',
    path: './example/',
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  resolve: {
      extensions: ['', '.js', '.jsx', '.json'],
      modulesDirectories: ['node_modules', 'jsx-components']
  }

};