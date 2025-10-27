
export class CommonPage {
    elements = {
        questionButton: (text: string) => cy.contains('button', text),
        // answerText: (text: string) => cy.contains('div p', text, { timeout: 60000 }),
        answerText: (text: string) => cy.get('div[data-state="open"]').find('p').contains(text, { timeout: 60000 }),
        helpText: (text: string) => cy.contains('button p', text, { timeout: 60000 }),

        firstNameInput: () => cy.get('#FirstName', { timeout: 60000 }).should('be.visible'),
        lastNameInput: () => cy.get("#LastName", { timeout: 60000 }).should('be.visible'),
        emailInput: () => cy.get("#Email", { timeout: 60000 }).should('be.visible'),

        websiteInput: () => cy.get("#Website"),
        operatorSeatsDropdown: () => cy.get("#Form_Operator_Connect_Seats__c"),
        requiredFieldMsg: () => cy.contains('div', "This field is required"),
        invalidEmailMsg: () => cy.contains('div', "Must be valid email"),
    }

    clickQuestion(questionText: string) {
        this.elements.questionButton(questionText).click({ force: false });
    }

    verifyHelpVisible(answerSnippet: string) {
        this.elements.helpText(answerSnippet).should("be.visible");
    }

    verifyHelpNotVisible(answerSnippet: string) {
        // this.elements.helpText(answerSnippet).should("not.exist");
        this.elements.answerText(answerSnippet).should('exist').and('not.be.visible');
    }

    verifyAnswerVisible(answerSnippet: string) {
        this.elements.answerText(answerSnippet).should("be.visible");
    }

    verifyAnswerNotVisible(answerSnippet: string) {
        // this.elements.answerText(answerSnippet).should("not.exist");
        this.elements.answerText(answerSnippet).should('exist').and('not.be.visible');
    }

    typeFirstName(name: string) {
        this.elements.firstNameInput().clear().type(name);
    }

    typeLastName(name: string) {
        this.elements.lastNameInput().clear().type(name);
    }

    typeEmail(email: string) {
        this.elements.emailInput().clear().type(email);
    }

    typeWebsite(website: string) {
        this.elements.websiteInput().clear().type(website);
    }

    selectOperatorSeats(value: string) {
        this.elements.operatorSeatsDropdown().select(value);
    }

    checkFirstNameValue(expected: string) {
        this.elements.firstNameInput().should("have.value", expected);
    }

    checkLastNameValue(expected: string) {
        this.elements.lastNameInput().should("have.value", expected);
    }

    checkEmailValue(expected: string) {
        this.elements.emailInput().should("have.value", expected);
    }

    checkWebsiteValue(expected: string) {
        this.elements.websiteInput().should("have.value", expected);
    }

    checkRequiredFieldVisible() {
        this.elements.requiredFieldMsg().should("exist");
    }

    checkInvalidEmailMsgVisible() {
        this.elements.invalidEmailMsg().should("exist");
    }
}
export const commonPage = new CommonPage();