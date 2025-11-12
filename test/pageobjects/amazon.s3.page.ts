import BasePage from './base.page';

class ResourcesPage extends BasePage {
    get TiBField() { return $('input[class="c-PJLV c-bzcDeh c-PJLV-ealYFu-lead-false"]'); }
    get costsPerMonthHeader() { return $('h3*=Compare costs per month'); } 
    get nextButton() { return $('span*=Next'); } 
    get backButton() { return $('span*=Back'); } 
}

export default new ResourcesPage();