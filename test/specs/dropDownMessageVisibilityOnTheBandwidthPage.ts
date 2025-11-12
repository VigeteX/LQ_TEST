import CommonPage from '../pageobjects/common.page';

describe('Drop down message visibility', () => {
    before(() => {
        CommonPage.open('/the-better-bandwidth-alternative');
        CommonPage.handleCookies();
    });

    it('drop down message visibility', async () => {
        const msgText = "10DLC approval in just 72 hours"
        const dropDawn = await CommonPage.getDropDawn("10DLC")
        await dropDawn.waitForClickable({ timeout: 30000 });
        await dropDawn.click();

        let message = await CommonPage.getMessage(msgText)
        await message.waitForDisplayed({ timeout: 15000 });
        await expect(message).toBeDisplayed()

        await dropDawn.click();
        message = await CommonPage.getMessage(msgText)
        await message.waitForDisplayed({ reverse: true, timeout: 15000 });
        await expect(message).not.toBeDisplayed()
    });
});