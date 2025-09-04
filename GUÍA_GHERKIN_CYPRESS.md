# Guía de Integración de Gherkin (Cucumber) con Cypress

## 1. Instalación de dependencias

Ejecuta estos comandos en la raíz del proyecto para instalar las dependencias necesarias:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install esbuild@0.25.9 --save-dev
npm install --save-dev @badeball/cypress-cucumber-preprocessor @badeball/cypress-configuration preprocessor @cypress/webpack-preprocessor @bahmutov/cypress-esbuild-preprocessor
npm install
```

## 2. Configuración de Cypress para Gherkin

### Archivo `cypress.config.js`
Asegúrate de tener la siguiente configuración:

```js
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  responseTimeout: 30000,
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
```

### Archivo `cypress-cucumber.config.js`

```js
const { defineConfig } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  stepDefinitions: [
    "cypress/e2e/features/**/step_definitions/*.js"
  ]
});
```

## 3. Estructura de carpetas recomendada

```
cypress/
  e2e/
    features/
      example.feature
      example/
        step_definitions/
          example.js
```

## 4. Ejemplo de archivo `.feature`

`cypress/e2e/features/example.feature`
```gherkin
Feature: Example feature for Gherkin
  Scenario: Visit the Cypress website
    Given I open the Cypress website
    Then I should see "JavaScript End to End Testing Framework"
```

## 5. Ejemplo de step definitions

`cypress/e2e/features/example/step_definitions/example.js`
```js
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Cypress website', () => {
  cy.visit('https://www.cypress.io');
});

Then('I should see "JavaScript End to End Testing Framework"', () => {
  cy.contains('JavaScript End to End Testing Framework').should('be.visible');
});
```

## 6. Ejecutar Cypress

Abre la interfaz de Cypress con:
```powershell
npx cypress open
```

¡Listo! Ahora puedes crear y ejecutar pruebas en formato Gherkin con Cypress.
