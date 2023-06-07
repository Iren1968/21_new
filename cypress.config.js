const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'ht8vzr',
  e2e: {
    baseUrl: 'https://staging.lpitko.ru',
    testIsolation: false,
    specPattern: '**/*.cy.js',
    //pageLoadTimeout: 200000,
    watchForFileChanges: false,
    testIsolation: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement node event listeners here
    },
  },
});
