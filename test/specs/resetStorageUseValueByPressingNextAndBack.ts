import AmazonPage from '../pageobjects/amazon.s3.page';

describe('Reset Storage Use Value', () => {
    before(() => {
        AmazonPage.open('/the-better-amazon-s3-alternative');
        AmazonPage.handleCookies();
    });

    it('should reset', async () => {
        await AmazonPage.TiBField.setValue(10);
        await AmazonPage.nextButton.click();
        await AmazonPage.backButton.click();
        const TiBValue = await AmazonPage.TiBField.getValue();
        await expect(TiBValue).toEqual("0");
    });
});