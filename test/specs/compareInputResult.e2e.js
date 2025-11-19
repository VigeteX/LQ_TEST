const FormsPage = require('../pageobjects/forms.page.js');
const testData = require('../../testData.json');

describe('Login test', () => {
    it('should login successfully', async () => {
        await FormsPage.menuForms.click();
        
        await FormsPage.inputText.setValue(testData.text);
        await expect(FormsPage.inputTextResult).toHaveText(testData.text);
    });
});