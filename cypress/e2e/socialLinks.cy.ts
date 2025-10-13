/// <reference types="cypress" />
import { MainPage } from '../pages/mainPage'

const mainPage = new MainPage()

describe('Transitions on links in the footer', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
  })

  it('LinkedIn link opens Telnyx LinkedIn page', () => {
    mainPage.clickLinkedIn()
    cy.url().should('include', 'linkedin.com/company/telnyx')
  })

  it('X link opens Telnyx X (Twitter) page', () => {
    cy.visit('https://telnyx.com/')
    mainPage.clickX()
    cy.url().should('include', 'x.com/telnyx')
  })

  it('Facebook link opens Telnyx Facebook page', () => {
    cy.visit('https://telnyx.com/')
    mainPage.clickFacebook()
    cy.url().then((url) => {
    const decoded = decodeURIComponent(url);
    expect(decoded).to.include('facebook.com/Telnyx');
    });
  })
  
})