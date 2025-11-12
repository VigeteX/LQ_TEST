import IotPage from '../pageobjects/iot.data.plans.page';

describe('Invalid calkulate pricing', () => {
    before(() => {
        IotPage.open('/pricing/iot-data-plans');
        IotPage.handleCookies();
    });

    it('calkulate pricing', async () => {
        await IotPage.SIMNumberField.setValue("s");
        await expect(IotPage.SIMNumbererrorMessage).toExist()
    });
});