import BasePage from './base.page';

class ResourcesPage extends BasePage {
    get searchField() { return $('input[id="search"]'); }
}

export default new ResourcesPage();