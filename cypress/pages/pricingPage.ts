export class PricingPage {
  elements = {
    telnyxLogo: () => cy.get('[src="/images/telnyx-logo-with-text-cream.svg"]').parent(),
  }
  clickLogo() {
    this.elements.telnyxLogo().click()
  }
}