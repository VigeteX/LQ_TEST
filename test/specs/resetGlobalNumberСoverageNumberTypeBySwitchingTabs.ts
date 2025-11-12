import CoveragePage from '../pageobjects/coverage.page';

describe('Reset Global Number Coverage number type', () => {
    before(() => {
        CoveragePage.open('/global-coverage');
        CoveragePage.handleCookies();
    });

    it('should reset', async () => {
        await CoveragePage.clickNumberTypeFor('Albania')
        await CoveragePage.resetFilters()
        
        await CoveragePage.numberTypesButton.waitForClickable()
        await CoveragePage.numberTypesButton.click()
        await CoveragePage.servicesButton.waitForClickable()
        await CoveragePage.servicesButton.click()

        const text = await CoveragePage.getNumberTypeFor('Albania');
        await expect(text).toEqual('Local');
    });
});
