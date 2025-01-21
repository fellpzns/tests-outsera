const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config); // Configuração correta
      return config;
    },
    specPattern: '**/*.feature', // Defina o padrão de arquivos .feature
    video: false,
  },
});