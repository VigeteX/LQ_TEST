const FormsPage = require('../pageobjects/forms.page.js');

describe('Login test', () => {
    it('should login successfully', async () => {
        await FormsPage.menuForms.click();
        
        await FormsPage.activeButton.click();
        await expect(FormsPage.activeButtonMessage).toBeDisplayed();
    });
});