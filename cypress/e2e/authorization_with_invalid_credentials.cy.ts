import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();
  const header = new HeaderPage();

  const valid_email = 'tttest0tttest@gmail.com';
  const valid_password = 'Tttest0tttest@gmail.com';

  let emails = [
    'tttest 0tttest@gmail.com',
    'еуіегіуккутеяшдф',
    'еееуіе0еееуіе',
    'tttest0tttestgmail.com',
    'tttest0tttest@gmailcom',
    'tttest0tttest@gmail',
    'tttest0tttest@.com',
    'tttest0tttest',
    'tttest0tttest@@gmail.com',
  ]
  const passwords = [
    'Tttest0tttest@gmail.com ',
    ' Tttest0tttest@gmail.com',
    'tttest0tttest@gmail.com',
    'TTTEST0TTTSET@GMAIL.COM',
    'Еееуіе0еееуіе@пьфшд.сщь',
  ]
  const password3 = 'Tttest1tttest@gmail.com';

  it('C203 Authorization with invalid credentials', () => {
    cy.visit('/');
    for (let i = 0; i < emails.length; i++){
      header.elements.enterButton().click();
      loginPage.login(emails[i],valid_password)
      loginPage.check_error_message('Неправильний формат email або номера телефону')
      loginPage.elements.authClose().click()
    }
    for (let i = 0; i<passwords.length; i++){
      header.elements.enterButton().click();
      loginPage.login(valid_email,passwords[i])
      loginPage.check_error_message('Пароль повинен містити як мінімум 1 цифру, 1 велику літеру і 1 малу літеру, також не повинен містити кирилицю та пробіли')
      loginPage.elements.authClose().click()
    }
    header.elements.enterButton().click();
    loginPage.login(valid_email,password3)
    loginPage.elements.errorMessage().should('be.visible').and('have.text', 'Невірний e-mail або пароль')
    loginPage.elements.authClose().click()
  });
});
