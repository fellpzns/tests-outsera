const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = (on, config) => {
  addCucumberPreprocessorPlugin(on, config); // Aqui está a correção
  return config;
};