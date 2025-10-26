import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "../pageobject/mainPage";
import { commonPage } from "../pageobject/сommonPage";
const data = require("../../fixtures/data.json");

When("I click on the green text button", () => {
    mainPage.clickGreenTextButton();
});

When('I enter {string} into into Type your message here... field', (message: string) => {
    mainPage.typeMessage(message);
});

When("I click on the send button", () => {
    mainPage.clickSendButton();
});

Then("Chat text value should be displayed {string}", (message: string) => {
    mainPage.verifyInputValue(message);
});

Then("Chat message value should be displayed {string}", (message: string) => {
    mainPage.verifyChatMessage(message);
});

Given("I am on the {string} page", (url: string) => {
    mainPage.visit(url);
});

Then("Thank you page should be opened", () => {
    mainPage.verifyUrlContains("https://telnyx.com/thank-you");
});

Then("{string} page should be opened", (url: string) => {
    mainPage.verifyUrlContains(url);
});

When('I scroll down to the {string} panel', (panelTitle: string) => {
    mainPage.scrollToPanel(panelTitle);
});

Then('The {string} panel should be visible', (panelTitle: string) => {
    mainPage.verifyPanelVisible(panelTitle);
});

When('I click on the {string} button', (buttonText: string) => {
    mainPage.clickButton(buttonText);
});

Then('The panel title should change to {string}', (expectedTitle: string) => {
    mainPage.verifyPanelTitle(expectedTitle);
});

When('I enter {string} into the text field', (text: string) => {
    mainPage.enterText(text);
});

Then('The text field should contain {string}', (expected: string) => {
    mainPage.verifyTextValue(expected);
});

Then('The message in the text field should change to the standard one', () => {
    mainPage.verifyTextIsStandard();
});

When('I click on the {string} question', (questionText: string) => {
    commonPage.clickQuestion(questionText);
});

Then('The help text {string} should be visible', (answerSnippet: string) => {
    commonPage.verifyHelpVisible(answerSnippet);
});

Then('The help text {string} should not be visible', (answerSnippet: string) => {
    commonPage.verifyHelpNotVisible(answerSnippet);
});

Then('The answer text {string} should be visible', (answerSnippet: string) => {
    commonPage.verifyAnswerVisible(answerSnippet);
});

Then('The answer text {string} should not be visible', (answerSnippet: string) => {
    commonPage.verifyAnswerNotVisible(answerSnippet);
});
//
When("I enter firstName into first name input field", () => {
    commonPage.typeFirstName(data.fitstName);
});
When("I enter nothing into first name input field", () => {
    commonPage.typeFirstName(" ");
});

When("I enter lastName into last name input field", () => {
    commonPage.typeLastName(data.lastName);
});
When("I enter nothing into last name input field", () => {
    commonPage.typeLastName(" ");
});

When("I enter example@yourdomain.com into email input field", () => {
    commonPage.typeEmail(data.email);
});
When("I enter email into email input field", () => {
    commonPage.typeEmail("email");
});

When("I enter website into website input field", () => {
    commonPage.typeWebsite(data.website);
});
When("I enter nothing into website input field", () => {
    commonPage.typeWebsite(" ");
});

Then("First name value should be displayed", () => {
    commonPage.checkFirstNameValue(data.fitstName);
});
Then("First name value should not be displayed", () => {
    commonPage.checkFirstNameValue(" ");
});

Then("Last name value should be displayed", () => {
    commonPage.checkLastNameValue(data.lastName);
});
Then("Last name value should not be displayed", () => {
    commonPage.checkLastNameValue(" ");
});

Then("Email value should be displayed example@yourdomain.com", () => {
    commonPage.checkEmailValue(data.email);
});
Then("Email value should be displayed email", () => {
    commonPage.checkEmailValue("email");
});

Then("Website value should be displayed", () => {
    commonPage.checkWebsiteValue(data.website);
});
Then("Website value should not be displayed", () => {
    commonPage.checkWebsiteValue(" ");
});

Then("The field is required message should be visible", () => {
    commonPage.checkRequiredFieldVisible();
});

Then("The Must be valid email message should be visible", () => {
    commonPage.checkInvalidEmailMsgVisible();
});

When("I select 0-50 in drop down menu How many Operator Connect seats will you need?", () => {
    commonPage.selectOperatorSeats("0-50");
});

