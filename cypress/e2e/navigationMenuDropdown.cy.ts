/// <reference types="cypress" />
import { MainPage } from '../pages/mainPage'

const mainPage = new MainPage()

describe('Navigation menu dropdown visibility', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.wait(2000)
  })

  it('Opens "Communication" dropdown when clicking "Products"', () => {
    mainPage.clickProducts()
    mainPage.elements.productsDropdown().should('be.visible')
  })

  it('Opens "For Industries" dropdown when clicking "Solutions"', () => {
    mainPage.clickSolutions()
    mainPage.elements.solutionsDropdown().should('be.visible')
  })

  it('Opens "Why Telnyx" dropdown when clicking "Why Telnyx"', () => {
    mainPage.clickWhyTelnyx()
    mainPage.elements.whyTelnyxDropdown().should('be.visible')
  })

  it('Opens "Resources" dropdown when clicking "Resources"', () => {
    mainPage.clickResources()
    mainPage.elements.resourcesDropdown().should('be.visible')
  })

  it('Opens "Developers" dropdown when clicking "Developers"', () => {
    mainPage.clickDevelopers()
    mainPage.elements.developersDropdown().should('be.visible')
  })
})