import CommonPage from '../pageobjects/common.page';

describe('Drop down message visibility', () => {
    before(() => {
        CommonPage.open('/the-better-twilio-alternative');
        CommonPage.handleCookies();
    });

    it('drop down message visibility', async () => {
        const msgText = "Starting at $1.00 per local or toll-free number per month"
        const dropDawn = await CommonPage.getDropDawn("Numbers")
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