import CommonPage from '../pageobjects/common.page';

describe('Drop down message visibility', () => {
    before(() => {
        CommonPage.open('/the-better-vonage-voice-api-alternative');
        CommonPage.handleCookies();
    });

    it('drop down message visibility', async () => {
        const dropDawn = await CommonPage.getDropDawn("Browser/App Calling")
        await dropDawn.waitForClickable({ timeout: 30000 });
        await dropDawn.click();

        const parent = await dropDawn.$('../../..');
        
        let state = await parent.getAttribute('data-state');
        expect(state).toEqual('open');

        await dropDawn.click();
        state = await parent.getAttribute('data-state');
        expect(state).toEqual('closed');
    });
});