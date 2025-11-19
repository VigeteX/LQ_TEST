const LoginPage = require('../pageobjects/login.page.js');
const testData = require('../../testData.json');

describe('Login test', () => {
    it('should login successfully', async () => {
        await LoginPage.menuLogin.click();
        
        await LoginPage.inputEmail.setValue(testData.valid.email);
        await LoginPage.inputPassword.setValue(testData.invalid.password);
        await LoginPage.btnLogin.click();

        await expect(LoginPage.invalidPasswordMessage).toBeDisplayed();
    });
});