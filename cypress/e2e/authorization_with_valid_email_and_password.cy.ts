import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();
  const header = new HeaderPage();

  const email = 'tttest0tttest@gmail.com';
  const password = 'Tttest0tttest@gmail.com';

  it('C201 Authorization with valid email and password', () => {
    cy.visit('/');
    
    header.elements.enterButton().click();

    loginPage.elements.emailField().type(email).should('have.value', email);
    loginPage.elements.passwordField().type(password).should('have.value', password);;
    
    loginPage.elements.hidepassworIcon().click();
    loginPage.elements.passwordField().should('have.attr', 'type', 'text');
    loginPage.elements.hidepassworIcon().click();
    loginPage.elements.passwordField().should('have.attr', 'type', 'password');

    loginPage.elements.submitButton().click();

    header.elements.avatarIcon().click();
    header.elements.profileDropdown().should('be.visible');
    header.elements.profileDropdownEmail().should('be.visible');
    header.elements.profileDropdownEmail().should('have.text', email);
  });
});