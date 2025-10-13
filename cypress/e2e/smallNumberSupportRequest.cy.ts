/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'

const contactUsPage = new ContactUsPage()

describe('Send "Support" request with less than 6 digits number in "Phone number" field', () => {
  it('Shows an error for phone number shorter than 6 digits', () => {
    cy.visit('contact-us')

    contactUsPage.fillForm({
      help: 'Support',
      firstName: 'Boba',
      lastName: 'Biba',
      email: 'example@yourdomain.com',
      country: 'United States (+1)',
      phone: '1',
      company: 'website',
      request: 'request',
      hearAbout: 'Telnyx'
    })

    contactUsPage.submitForm()
    contactUsPage.verifyPhoneError()
  })
})