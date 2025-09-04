const { defineConfig } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  stepDefinitions: [
    "cypress/e2e/features/**/step_definitions/*.js",
    "cypress/e2e/features/common/front/step_definitions/*.js",
    "cypress/e2e/features/common/back/step_definitions/*.js"
  ]
});
