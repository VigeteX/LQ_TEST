Cypress UI Tests for Telnyx Website
Summary of Repository

This repository contains automated UI tests for various pages of the Telnyx website (https://telnyx.com/).
Tests are written using Cypress and TypeScript, following the Page Object Model (POM) structure.
Each test corresponds to a manual test case defined in the specification document.

---
Requirements
Before running the tests, make sure you have installed the following:

    Node.js 20, 22, 24 and above

    npm v9+

    Cypress v15+

---

## Steps to Install
1. Clone this repository:
git clone https://github.com/VigeteX/LQ3.git
cd Telnyx-Cypress-UI-Tests
2. Open the project folder in VS Code.
3. Install dependencies:
    npm install

## Steps to Launch Tests
1. Run all tests:
    npm run test:all
2. Run tests in Google Chrome:
    npm run test
3. Run tests in Microsoft Edge:
    npm run test:edge

├── cypress/
│   ├── e2e/
│   │   ├── 1.validSupportRequest.cy.ts                        # Send "Support" request with valid data
│   │   ├── 2.emptyFirstNameSupportRequest.cy.ts               # Send "Support" request with empty "First name" field
│   │   ├── 3.emptyBusinessEmailSupportRequest.cy.ts           # Send "Support" request with empty "Business email" field
│   │   ├── 4.smallNumberSupportRequest.cy.ts                  # Send "Support" request with less than 6 digits number
│   │   ├── 5.validSalesInquiryRequest.cy.ts                   # Send "Sales Inquiry" request with valid data
│   │   ├── 6.switchingBetweenSupportAndSalesInquiry.cy.ts     # Switching between "Support" and "Sales Inquiry" options
│   │   ├── 7.navigationMenuDropdown.cy.ts                     # Navigation menu dropdown visibility
│   │   ├── 8.socialLinks.cy.ts                                # Transitions on links in the footer
│   │   ├── 9.navigationMenuTransitions.cy.ts                  # Navigation menu transitions to the home page
│   │   └── 10.speechToText.cy.ts                              # Upload mp3 file and convert speech to text
│   ├── pages/
│   │   ├── contactUsPage.ts          # Page Object for Contact Us page
│   │   ├── mainPage.ts               # Page Object for main Telnyx page
│   │   └── pricingPage.ts            # Page Object for Pricing page
│   ├── support/
│   │   ├── commands.ts               # Custom Cypress commands
│   │   └── e2e.ts                    # Global hooks and overrides
│   └── fixtures/
│       └── test.mp3                  # Audio file with "Hello World" speech
├── cypress.config.ts                 # Main Cypress config file
├── cypress.config.edge.ts            # Config for edge brauser
├── package.json
├── tsconfig.json                     # TypeScript configuration
└── README.md
