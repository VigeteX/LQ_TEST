
export class CommonPage {
    elements = {
        questionButton: (text: string) => cy.contains('button', text),
        answerText: (text: string) => cy.contains('p', text, { timeout: 30000 }),

        firstNameInput: () => cy.get('#FirstName', { timeout: 30000 }).should('be.visible'),
        lastNameInput: () => cy.get("#LastName", { timeout: 30000 }).should('be.visible'),
        emailInput: () => cy.get("#Email", { timeout: 30000 }).should('be.visible'),

        websiteInput: () => cy.get("#Website"),
        operatorSeatsDropdown: () => cy.get("#Form_Operator_Connect_Seats__c"),
        requiredFieldMsg: () => cy.contains('div', "This field is required"),
        invalidEmailMsg: () => cy.contains('div', "Must be valid email"),
    }

    clickQuestion(questionText: string) {
        this.elements.questionButton(questionText).click({ force: false });
    }

    verifyAnswerVisible(answerSnippet: string) {
        this.elements.answerText(answerSnippet).should("be.visible");
    }

    verifyAnswerNotVisible(answerSnippet: string) {
        this.elements.answerText(answerSnippet).should("not.exist");
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