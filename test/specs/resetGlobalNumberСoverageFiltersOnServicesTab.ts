import CoveragePage from '../pageobjects/coverage.page';

describe('Reset Global Number Coverage filters', () => {
    before(() => {
        CoveragePage.open('/global-coverage');
        CoveragePage.handleCookies();
    });

    it('should reset filters', async () => {
        await CoveragePage.selectCountry('Africa')
        await CoveragePage.selectFilter('Local')
        await CoveragePage.resetFilters()

        const countryText = await CoveragePage.countryDropdown.getText();
        const filterText = await CoveragePage.filterDropdown.getText();
        await expect(countryText).toEqual('Search country');
        await expect(filterText).toEqual('Filter by');
    });
});
