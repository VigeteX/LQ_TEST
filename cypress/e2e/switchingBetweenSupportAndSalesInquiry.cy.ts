/// <reference types="cypress" />
import { ContactUsPage } from '../pages/contactUsPage'

const contactUsPage = new ContactUsPage()

describe('Switching between "Support" and "Sales Inquiry" options to clear "Please describe your request" field', () => {
  beforeEach(() => {
    cy.visit('contact-us')
    cy.wait(2000)
  })

  it('Request field is empty', () => {
    contactUsPage.fillForm({
      help: 'Support',  
      request: 'request',
    })
    contactUsPage.fillForm({
      help: 'Sales Inquiry',  
    })
    contactUsPage.fillForm({
      help: 'Support',  
    })

    contactUsPage.elements.requestTextarea().should('have.value', '')

  })
})