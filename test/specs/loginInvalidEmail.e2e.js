const LoginPage = require('../pageobjects/login.page.js');
const testData = require('../../testData.json');

describe('Login test', () => {
    it('should login successfully', async () => {
        await LoginPage.menuLogin.click();
        
        await LoginPage.inputEmail.setValue(testData.invalid.email);
        await LoginPage.inputPassword.setValue(testData.valid.password);
        await LoginPage.btnLogin.click();

        await expect(LoginPage.invalidEmailMessage).toBeDisplayed();
    });
});