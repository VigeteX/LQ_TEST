import BasePage from './base.page';

class CoveragePage extends BasePage {
    get countryDropdown() { return $('button*=Search country'); }
    get filterDropdown() { return $('button*=Filter by'); }
    
    get filterAlbaniaLocalOption() { return $('tr:has(td*=Albania) button span=Local'); }

    get servicesButton() { return $('button=Services'); }
    get numberTypesButton() { return $('button=Number types'); }

    get resetButton() { return $('button=Reset filters'); }

    async selectCountry(country: string){
        await this.countryDropdown.click();
        const option = await $(`span=${country}`);
        option.waitForDisplayed({ timeout: 5000 });
        option.click();
    }
    
    async selectFilter(filter: string) {
        await this.filterDropdown.click(); 
        const option = await $(`span=${filter}`);
        option.waitForDisplayed({ timeout: 5000 });
        option.click();
    }
    
    resetFilters() {
        this.resetButton.click();
    }


    async clickNumberTypeFor(countryName: string) {
        await browser.waitUntil(
            async () => {
                const rows = await $$('tr, div[role="row"]');
                const count = await rows.length;
                return count > 0;
            },
            { timeout: 10000, timeoutMsg: 'Table rows not loaded' }
        );
        const rows = await $$('tr, div[role="row"]');
        for (const row of rows) {
            const text = await row.getText();
            if (text.includes(countryName)) {
                const button = await row.$('button span');
                await button.waitForClickable({ timeout: 5000 });
                await button.click();
                return;
            }
        }
        throw new Error(`Country "${countryName}" not found`);
    }

    async getNumberTypeFor(countryName: string) {
        await browser.waitUntil(
            async () => {
                const rows = await $$('tr, div[role="row"]');
                const count = await rows.length;
                return count > 0;
            },
            { timeout: 10000, timeoutMsg: 'Table rows not loaded' }
        );
        const rows = await $$('tr, div[role="row"]');
        for (const row of rows) {
            const text = await row.getText();
            if (text.includes(countryName)) {
                const button = await row.$('button span');
                return button.getText();
            }
        }
        throw new Error(`Country "${countryName}" not found`);
    }
    
}

export default new CoveragePage();