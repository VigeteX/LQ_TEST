import CommonPage from '../pageobjects/common.page';

describe('Drop down message visibility', () => {
    before(() => {
        CommonPage.open('/the-best-vapi-alternative');
        CommonPage.handleCookies();
    });

    it('drop down message visibility', async () => {
        const msgText = "Sub-second round-trip time enabled by a global private IP"
        const dropDawn = await CommonPage.getDropDawn("Latency")
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