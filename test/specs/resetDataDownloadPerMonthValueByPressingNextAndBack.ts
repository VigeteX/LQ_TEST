import AmazonPage from '../pageobjects/amazon.s3.page';

describe('Reset Data Download', () => {
    before(() => {
        AmazonPage.open('/the-better-amazon-s3-alternative');
        AmazonPage.handleCookies();
    });

    it('should reset', async () => {
        await AmazonPage.nextButton.waitForClickable({ timeout: 30000 });
        await AmazonPage.nextButton.click();

        await AmazonPage.TiBField.setValue(10);

        await AmazonPage.nextButton.waitForClickable({ timeout: 30000 });
        await AmazonPage.nextButton.click();
        await AmazonPage.backButton.waitForClickable({ timeout: 30000 });
        await AmazonPage.backButton.click();
        
        const TiBValue = await AmazonPage.TiBField.getValue();
        expect(TiBValue).toEqual("0");
    });
});