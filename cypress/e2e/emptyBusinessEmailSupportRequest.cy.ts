/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'
const contactUsPage = new ContactUsPage()

describe('Send "Support" request with empty "Business email" field', () => {
  beforeEach(() => {
    cy.visit('contact-us')
  })

  it('Show error when email is empty', () => {
    contactUsPage.fillForm({
      help: 'Support',
      firstName: 'Boba',
      lastName: 'Biba',
      country: 'United States (+1)',
      phone: '999999999',
      company: 'website',
      request: 'request',
      hearAbout: 'Telnyx'
    })

    contactUsPage.submitForm()
    contactUsPage.verifyEmailError()
  })
})