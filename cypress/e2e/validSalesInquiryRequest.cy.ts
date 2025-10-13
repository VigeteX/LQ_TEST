/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'

const contactUsPage = new ContactUsPage()

describe('Send "Sales Inquiry" request with valid data', () => {
  beforeEach(() => {
    cy.visit('contact-us')
    cy.wait(2000)
  })

  it('Submit the form successfully', () => {
    contactUsPage.selectSupportOption()

    contactUsPage.fillForm({
      help: 'Sales Inquiry',
      firstName: 'Boba',
      lastName: 'Biba',
      email: 'example@yourdomain.com',
      country: 'United States (+1)',
      phone: '999999999',
      company: 'website',
      request: 'request',
      hearAbout: 'Telnyx',

      productInterest: 'AI / Inference',
      monthlySpend: 'Less than $1000',
      useCase: 'With Code',
    })

    contactUsPage.submitForm()

    contactUsPage.verifyThankYouPage()
  })
})