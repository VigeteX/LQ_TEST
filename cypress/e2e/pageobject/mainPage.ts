export class MainPage {
    elements = {
        greenTextButton: () => cy.get('button[class*="rounded-full"]'),
        messageInput: () => cy.get("#user-message-input"),
        sendButton: () => cy.get('button[class="relative rounded-full p-2 size-10 overflow-clip cursor-pointer disabled:cursor-default shadow-md"]'),
        chatMessage: () => cy.get('div[class*="scrollbar-thumb-telnyx-dark-cream"]'),
        signUpButton: () => cy.get('span[data-content="Sign up"]').parent(),
        logo: () => cy.get('img[src="/images/telnyx-logo-with-text-cream.svg"]').parent(),
        startBuildingButton: () => cy.get('span[data-content="START BUILDING"]').parent(),
        panelByTitle: (title: string) => cy.contains(title),
        buttonByText: (text: string) => cy.contains("button", text),
        textArea: () => cy.get('textarea[id="text-to-speech-textarea"]')
    };

    visit_telnyx() {
        cy.visit("https://telnyx.com");
    }
    visit(url: string) {
        cy.visit(url);
    }

    clickGreenTextButton() {
        this.elements.greenTextButton().click();
    }

    typeMessage(message: string) {
        this.elements.messageInput().type(message);
    }

    clickSendButton() {
        this.elements.sendButton().click();
    }

    verifyInputValue(message: string) {
        this.elements.messageInput().should("have.value", message);
    }

    verifyChatMessage(message: string) {
        this.elements.chatMessage().should("contain", message);
    }

    clickSignUpButton() {
        this.elements.signUpButton().click();
    }

    clickLogo() {
        this.elements.logo().click();
    }

    clickStartBuilding() {
        this.elements.startBuildingButton().click();
    }

    verifyUrlContains(expectedUrl: string) {
        cy.url().should("include", expectedUrl);
    }

    scrollToPanel(title: string) {
        this.elements.panelByTitle(title).scrollIntoView();
    }

    verifyPanelVisible(title: string) {
        this.elements.panelByTitle(title).should("be.visible");
    }

    clickButton(text: string) {
        this.elements.buttonByText(text).click();
    }

    verifyPanelTitle(expected: string) {
        cy.contains('div', expected).should("contain.text", expected);
    }

    enterText(text: string) {
        this.elements.textArea().clear().type(text);
    }

    verifyTextValue(expected: string) {
        this.elements.textArea().should("have.value", expected);
    }

    verifyTextIsStandard() {
        this.elements.textArea().should("contain.text", "Good morning");
    }
}

export const mainPage = new MainPage();