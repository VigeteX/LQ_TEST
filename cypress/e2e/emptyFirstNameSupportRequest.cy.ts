/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'

const contactUsPage = new ContactUsPage()

describe('Send "Support" request with empty "First name" field', () => {
  beforeEach(() => {
    cy.visit('contact-us')
    cy.wait(2000)
  })

  it('Show error when First Name is empty', () => {
    contactUsPage.selectSupportOption()

    contactUsPage.fillForm({
      help: 'Support',
      lastName: 'Biba',
      email: 'example@yourdomain.com',
      country: 'United States (+1)',
      phone: '999999999',
      company: 'website',
      request: 'request',
      hearAbout: 'Telnyx'
    })

    contactUsPage.submitForm()

    contactUsPage.verifyFirstNameError()
  })
})