import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Failed to fetch')) {
    return false;
  }
});