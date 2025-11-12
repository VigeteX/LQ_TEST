export default class BasePage {
    open(path: string) {
        return browser.url(path);
    }

    waitForElement(element: WebdriverIO.Element) {
        element.waitForDisplayed({ timeout: 30000 });
    }

    async handleCookies() {
        const cookieBtn = await $('#onetrust-accept-btn-handler');
        if (await cookieBtn.isDisplayed()) {
            await cookieBtn.click();
        }
    }
}