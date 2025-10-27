import './commands'
import 'cypress-mochawesome-reporter/register';
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Failed to fetch')) {
    return false;
  }
});
