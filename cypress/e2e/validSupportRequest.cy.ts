/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'

const contactUsPage = new ContactUsPage()

describe('Send "Support" request with valid data', () => {
  beforeEach(() => {
    cy.visit('contact-us')
    cy.wait(2000)
  })

  it('Submit the form successfully', () => {
    contactUsPage.fillForm({
      help: 'Support',  
      firstName: 'Boba',
      lastName: 'Biba',
      email: 'example@yourdomain.com',
      country: 'United States (+1)',
      phone: '999999999',
      company: 'website',
      request: 'request',
      hearAbout: 'Telnyx'
    })

    contactUsPage.submitForm()

    contactUsPage.verifyThankYouSupportPage()
  })
})