Cypress cucumber UI Tests for Telnyx Website
Summary of Repository

This repository contains automated UI tests for various pages of the Telnyx website (https://telnyx.com/).
Tests are written using Cypress, cucumber and TypeScript, following the Page Object Model (POM) structure.
Each test corresponds to a manual test case defined in the specification document.

---
Requirements
Before running the tests, make sure you have installed the following:

    Node.js 20, 22, 24 and above
    npm v9+
    Cypress v15+
    Cypress-cucumber-preprocessor v23.2.1
    Cypress-esbuild-preprocessor v2.2.6
---

## Steps to Install
1. Clone this repository:
git clone https://github.com/VigeteX/LQ4.git
2. Open the project folder in VS Code.
3. Install dependencies:
    npm install

## Steps to Launch Tests
1. Run all tests:
    npm run test:all
2. Run tests in Google Chrome:
    npx run test
3. Run tests in Microsoft Edge:
    npx run test:edge
4. Open cypress in Google Chrome:
    npx run open
5. Open cypress in Microsoft Edge:
    npx run open:edge

configs
    cypress.config.edge.ts
    cypress.config.ts 
cypress
    downloads
    e2e
        features
            dropDownMessageSwitchingOnTheMissionControlPage.feature
            dropDownMessageSwitchingOnTheTravelAndHospitalityPage.feature
            dropDownMessageVisibilityOnTheMissionControlPage.feature
            dropDownMessageVisibilityOnTheTravelAndHospitalityPage.feature
            howItWorksDropDownMessageVisibilityOnTheMissionControlPage.feature
            sendDownloadFullCoverageRequestWithEmptyFirstName.feature
            sendDownloadFullCoverageRequestWithEmptyLastName.feature
            sendDownloadFullCoverageRequestWithInvalidEmail.feature
            sendDownloadFullCoverageRequestWithValidData.feature
            sendInterestedInOperatorConnectRequestWithEmptyFirstName.feature
            sendInterestedInOperatorConnectRequestWithEmptyWebsite.feature
            sendInterestedInOperatorConnectRequestWithInvalidEmail.feature
            sendInterestedInOperatorConnectRequestWithValidData.feature
            sendMassageToAiAssistant.feature 
            switchingBetweenHDVoiceAIAndTextToSpeech.feature
        pageobject
        step_definitions
    fixtures
        data.json
    screensots
    support
        commands.ts
        e2e.ts
package.json
README.md
tsconfig.json    
