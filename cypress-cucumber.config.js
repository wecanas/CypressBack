const { defineConfig } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  stepDefinitions: [
    "cypress/e2e/features/**/step_definitions/*.js"
  ]
});
