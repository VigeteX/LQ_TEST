const FormsPage = require('../pageobjects/forms.page.js');
const testData = require('../../testData.json');

describe('Form test', () => {
    it('Input text and result identical', async () => {
        await FormsPage.menuForms.click();
        
        await FormsPage.inputText.setValue(testData.text);
        await expect(FormsPage.inputTextResult).toHaveText(testData.text);
    });
});