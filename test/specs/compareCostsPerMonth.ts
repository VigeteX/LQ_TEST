import AmazonPage from '../pageobjects/amazon.s3.page';

describe('Compare costs', () => {
    before(() => {
        AmazonPage.open('/the-better-amazon-s3-alternative');
        AmazonPage.handleCookies();
    });

    it('compare costs', async () => {
        await AmazonPage.TiBField.setValue(10);
        await AmazonPage.nextButton.click();
        await AmazonPage.TiBField.setValue(10);
        await AmazonPage.nextButton.click();
        await expect(AmazonPage.costsPerMonthHeader).toExist()
    });
});