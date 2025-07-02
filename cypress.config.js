const { defineConfig } = require("cypress");

module.exports = defineConfig({
  responseTimeout: 30000, // Cambia el tiempo de espera de respuesta a 30 segundos
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
