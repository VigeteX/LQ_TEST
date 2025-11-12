import BasePage from './base.page';

class iotPage extends BasePage {
    get SIMNumberField() { return $('input[name="iot-sim-savings-calculator__number-of-sim-cards"]'); }
    get MBNumberField() { return $('input[name="iot-sim-savings-calculator__number-of-mb-per-month"]'); }
    get countryDropdown() { return $('button*=Select country'); }
    get yesCheckbox() { return $('input[id="iot-sim-savings-calculator__public-ip__-yes"]')}

    get nextButton() { return $('span*=Next'); } 
    get monthlyEstimatedCosts() { return $('strong*=Monthly estimated costs')}

    get SIMNumbererrorMessage() { return $('div[id="iot-sim-savings-calculator__number-of-sim-cards_message"]'); }
    get MBNumbererrorMessage() { return $('div[id="iot-sim-savings-calculator__number-of-mb-per-month_message"]'); }

    async selectUnitedStates(){
        await this.countryDropdown.click();
        await browser.keys('Enter')
    }

}

export default new iotPage();