import { LoginPage } from '../pages/LoginPage';
import { HeaderPage } from '../pages/HeaderPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();
  const header = new HeaderPage();

  const phones = [
    '+380509998667',
    '380509998667',
    '0509998667',
  ]
  const password = 'Tttest0tttest@gmail.com';

  it('C202 Authorization with valid phone and password', () => {
    cy.visit('/');
    for (let i = 0; i < phones.length; i++){
      enter(phones[i])
    }
    
  });
  function enter(phone){
    header.elements.enterButton().click();
    loginPage.login(phone,password)

    header.elements.avatarIcon().click();
    header.elements.profileDropdown().should('be.visible');
    header.elements.logoutButton().click();
  }
});
