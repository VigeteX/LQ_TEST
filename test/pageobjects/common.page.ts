import BasePage from './base.page';

class ResourcesPage extends BasePage {
    get dropDawn() { return $('h3*=AI integration'); } 

    async getDropDawn(name: string){
        const dropDawn = await $(`h3=${name}`);
        await dropDawn.waitForDisplayed({ timeout: 30000 });
        return dropDawn
    }

    async getMessage(messageText: string){
        const message = await $(`p*=${messageText}`);
        return message
    }

}

export default new ResourcesPage();