export class MainPage {
  elements = {
    hdVoicePanel: () => cy.contains('True HD voice, end-to-end'),
    speechToTextButton: () => cy.contains('Speech to text'),
    fileInput: () => cy.get('input[type="file"]'),
    resultText: () => cy.get('#speech-to-text-conversation'),
    
    contactUsLink: () => cy.get('a[href="https://telnyx.com/contact-us"]').filter(':visible'),
    pricingLink: () => cy.get('a[href="/pricing"]').filter(':visible'),
    telnyxLogo: () => cy.get('[src="/dotcom-web/_next/static/media/telnyx-logo-text.621506af.svg"]').parent(),

    linkedinIcon: () => cy.get('a[href="https://www.linkedin.com/company/telnyx"]'),
    xIcon: () => cy.get('a[href="https://x.com/telnyx"]'),
    facebookIcon: () => cy.get('a[href="https://www.facebook.com/Telnyx/"]'),

    productsMenu: () => cy.get('button').contains('Products'),
    solutionsMenu: () => cy.get('button').contains('Solutions'),
    whyTelnyxMenu: () => cy.get('button').contains('Why Telnyx'),
    resourcesMenu: () => cy.get('button').contains('Resources'),
    developersMenu: () => cy.get('button').contains('Developers'),

    productsDropdown: () => cy.contains('Communication'),
    solutionsDropdown: () => cy.contains('For Industries'),
    whyTelnyxDropdown: () => cy.contains('Why Telnyx'),
    resourcesDropdown: () => cy.contains('Resources'),
    developersDropdown: () => cy.contains('Developers')
  }

  scrollToPanel() {
    this.elements.hdVoicePanel().scrollIntoView()
  }

  clickSpeechToText() {
    this.elements.speechToTextButton().click()
  }

  uploadAudio(filePath: string) {
    this.elements.fileInput().selectFile(filePath, { force: true })
  }

  verifyResultText(expectedText : string) {
    this.elements.resultText().should('contain.text', expectedText)
  }

  clickContactUs() {
    this.elements.contactUsLink().click();
  }

  clickPricing() {
    this.elements.pricingLink().click()
  }

  clickLogo() {
    this.elements.telnyxLogo().click()
  }

  verifyUrl(expectedUrl : URL) {
    cy.url().should('eq', expectedUrl)
  }
  
  clickLinkedIn() {
    this.elements.linkedinIcon().invoke('removeAttr', 'target').click()
  }

  clickX() {
    this.elements.xIcon().invoke('removeAttr', 'target').click()
  }

  clickFacebook() {
    this.elements.facebookIcon().invoke('removeAttr', 'target').click()
  }

  clickProducts() {
    this.elements.productsMenu().click({ force: true })
  }

  clickSolutions() {
    this.elements.solutionsMenu().click({ force: true })
  }

  clickWhyTelnyx() {
    this.elements.whyTelnyxMenu().click({ force: true })
  }

  clickResources() {
    this.elements.resourcesMenu().click({ force: true })
  }

  clickDevelopers() {
    this.elements.developersMenu().click({ force: true })
  }
}