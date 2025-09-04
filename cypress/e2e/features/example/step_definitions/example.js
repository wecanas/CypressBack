import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Cypress website', () => {
  cy.visit('https://www.cypress.io');
});

Then('I should see "JavaScript End to End Testing Framework"', () => {
  cy.contains('JavaScript End to End Testing Framework').should('be.visible');
});
