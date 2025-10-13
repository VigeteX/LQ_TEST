/// <reference types="cypress" />
import { MainPage } from '../pages/mainPage'
import { ContactUsPage } from '../pages/contactUsPage'
import { PricingPage } from '../pages/pricingPage'

const mainPage = new MainPage()
const contactUsPage = new ContactUsPage()
const pricingPage = new PricingPage()

describe('Navigation menu transitions to the home page', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com')
  });

  it('Navigate between pages', () => {
    
    mainPage.clickContactUs()
    cy.url().should('eq', 'https://telnyx.com/contact-us')
    contactUsPage.clickLogo()
    cy.url().should('eq', 'https://telnyx.com/')
    
    mainPage.clickPricing()
    cy.url().should('eq', 'https://telnyx.com/pricing')
    pricingPage.clickLogo()
  });
});