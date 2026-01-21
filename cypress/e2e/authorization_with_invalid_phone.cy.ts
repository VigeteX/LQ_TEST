import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();
  const header = new HeaderPage();

  const valid_password = 'Tttest0tttest@gmail.com';
  const phones = [
    '509998667',
    '050999866',
    '+380-50-999-8667',
    '+380 50 999 8667',
    '+380(50)9998667',
    '05099986677',
    '+10509998667',
    '+0509998667',
  ]

  
  it('C207 Authorization with invalid phone', () => {
    cy.visit('/');
    for (let i = 0; i < phones.length; i++){
      header.elements.enterButton().click();
      loginPage.login(phones[i],valid_password)
      loginPage.check_error_message('Неправильний формат email або номера телефону')
      loginPage.elements.authClose().click()
    }
  });
});
