import CoveragePage from '../pageobjects/coverage.page';

describe('Reset Global Number Coverage filters', () => {
    before(() => {
        CoveragePage.open('/global-coverage');
        CoveragePage.handleCookies();
    });

    it('should reset filters', async () => {
        await CoveragePage.numberTypesButton.waitForClickable()
        await CoveragePage.numberTypesButton.click()

        await CoveragePage.selectCountry('Africa')
        await CoveragePage.selectFilter('Local')
        
        await CoveragePage.servicesButton.waitForClickable()
        await CoveragePage.servicesButton.click()
        await CoveragePage.numberTypesButton.waitForClickable()
        await CoveragePage.numberTypesButton.click()

        await CoveragePage.countryDropdown.waitForDisplayed({ timeout: 30000 });
        await CoveragePage.filterDropdown.waitForDisplayed({ timeout: 30000 });

        const countryText = await CoveragePage.countryDropdown.getText();
        const filterText = await CoveragePage.filterDropdown.getText();
        expect(countryText).toEqual('Search country');
        expect(filterText).toEqual('Filter by');
    });
});