import { Dictionary } from "../../node_modules/cypress/types/lodash/index"

interface ContactUsFormData {
  help?: string
  firstName?: string
  lastName?: string
  email?: string
  country?: string
  phone?: string
  company?: string
  request?: string
  hearAbout?: string
  productInterest?: string
  monthlySpend?: string
  useCase?: string
}

export class ContactUsPage {
  elements = {
    telnyxLogo: () => cy.get('[src="/images/telnyx-logo-with-text-cream.svg"]').parent(),

    helpDropdown: () => cy.get('select[name="Reason_for_Contact__c"]'),
    
    firstNameInput: () => cy.get('input[name="FirstName"]'),
    lastNameInput: () => cy.get('input[name="LastName"]'),
    emailInput: () => cy.get('input[name="Email"]'),
    countryDropdown: () => cy.get('select[name="Phone_Number_Extension__c"]'),
    phoneInput: () => cy.get('input[name="Phone_Number_Base__c"]'),
    companyInput: () => cy.get('input[name="Website"]'),
    requestTextarea: () => cy.get('textarea[name="Form_Additional_Information__c"]'),
    hearAboutInput: () => cy.get('input[name="How_did_you_hear_about_Telnyx_Open__c"]'),

    productInterest: () => cy.get('select[name="Form_Product__c"]'),
    monthlySpend: () => cy.get('select[name="Form_Budget__c"]'),
    useCase: () => cy.get('select[name="Use_Case_Form__c"]'),
    
    submitButton: () => cy.get('button[type="submit"]'),

    thankYouMessage: () => cy.contains('Thank you'),

    firstNameError: () => cy.contains('This field is required'),
    requiredError: () => cy.contains('This field is required.'),
    emailError: () => cy.contains(/Must be valid email\.\s*example@yourdomain\.com/),
    phoneErrorMessage: () => cy.contains(/Phone numbers must be minimum 6 digits/i),
  }
  clickLogo() {
    this.elements.telnyxLogo().click()
  }

  selectSupportOption() {
    this.elements.helpDropdown().select('Support')
  }
  fillForm(data: ContactUsFormData) {
    if (data.help) this.elements.helpDropdown().select(data.help)
    if (data.firstName !== undefined) this.elements.firstNameInput().type(data.firstName)
    if (data.lastName !== undefined) this.elements.lastNameInput().type(data.lastName)
    if (data.email !== undefined) this.elements.emailInput().type(data.email)
    if (data.country) this.elements.countryDropdown().select(data.country)
    if (data.phone !== undefined) this.elements.phoneInput().type(data.phone)
    if (data.company !== undefined) this.elements.companyInput().type(data.company)
    if (data.request !== undefined) this.elements.requestTextarea().type(data.request)
    if (data.hearAbout !== undefined) this.elements.hearAboutInput().type(data.hearAbout)
    
    if (data.productInterest !== undefined) this.elements.productInterest().select(data.productInterest)
    if (data.monthlySpend !== undefined) this.elements.monthlySpend().select(data.monthlySpend)
    if (data.useCase !== undefined) this.elements.useCase().select(data.useCase)

  }
  submitForm() {
    this.elements.submitButton().click({ force: true })
  }
  verifyThankYouSupportPage() {
    cy.url().should('include', '/thank-you-support')
    this.elements.thankYouMessage().should('be.visible')
  }
  verifyThankYouPage() {
    cy.url().should('include', '/thank-you')
    this.elements.thankYouMessage().should('be.visible')
  }

  verifyFirstNameError() {
    this.elements.requiredError().should('be.visible')
    this.elements.firstNameInput().should('have.css', 'border-color').and('match', /rgb\(235, 0, 0\)|#ff0000/i)
  }
  verifyEmailError() {
    this.elements.emailError().should('be.visible')
    this.elements.emailInput().should('have.css', 'border-color').and('match', /rgb\(235, 0, 0\)|#ff0000/i)
  }
   verifyPhoneError() {
    this.elements.phoneErrorMessage().should('be.visible')
  }
}