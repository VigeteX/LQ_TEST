const FormsPage = require('../pageobjects/forms.page.js');

describe('Form test', () => {
    it('Message is display', async () => {
        await FormsPage.menuForms.click();
        
        await FormsPage.activeButton.click();
        await expect(FormsPage.activeButtonMessage).toBeDisplayed();
    });
});