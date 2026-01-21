import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();
  const header = new HeaderPage();

  const email = 'tttest0tttest@gmail.com';
  const password = 'Tttest0tttest@gmail.com';
  
  it('C207 Authorization with invalid phone', () => {
    cy.visit('/');
    header.elements.enterButton().click();
    
    loginPage.elements.emailField().type(email).should('have.value', email);
    loginPage.elements.submitButton().click();
    loginPage.check_error_message('Поле не може бути порожнім')

    loginPage.elements.emailField().clear()

    loginPage.elements.passwordField().type(password).should('have.value', password);
    loginPage.elements.submitButton().click();
    loginPage.check_error_message('Поле не може бути порожнім')
  });
});
