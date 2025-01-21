const path = require('path');

module.exports = {
  entry: './src/index.js', // ou o caminho para o seu arquivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.feature$/, // Arquivos .feature para Cypress com Cucumber
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader',
          },
        ],
      },
      {
        test: /\.js$/, // Para arquivos JavaScript
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
