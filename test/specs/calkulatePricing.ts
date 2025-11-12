import IotPage from '../pageobjects/iot.data.plans.page';

describe('Calkulate pricing', () => {
    before(() => {
        IotPage.open('/pricing/iot-data-plans');
        IotPage.handleCookies();
    });

    it('calkulate pricing', async () => {
        await IotPage.SIMNumberField.scrollIntoView();
        await IotPage.SIMNumberField.waitForDisplayed({ timeout: 5000 });
        await IotPage.SIMNumberField.setValue(10);

        await IotPage.nextButton.waitForClickable({ timeout: 5000 });
        await IotPage.nextButton.click();

        await IotPage.MBNumberField.waitForDisplayed({ timeout: 5000 });
        await IotPage.MBNumberField.setValue(10);

        await IotPage.nextButton.waitForClickable({ timeout: 5000 });
        await IotPage.nextButton.click();

        await IotPage.selectUnitedStates();
        await IotPage.nextButton.waitForClickable({ timeout: 5000 });
        await IotPage.nextButton.click();

        await IotPage.yesCheckbox.waitForClickable({ timeout: 5000 });
        await IotPage.yesCheckbox.click();

        await IotPage.nextButton.waitForClickable({ timeout: 5000 });
        await IotPage.nextButton.click();

        await expect(IotPage.monthlyEstimatedCosts).toExist()
    });
});