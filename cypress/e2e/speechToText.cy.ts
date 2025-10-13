/// <reference types="cypress" />
import { MainPage } from '../pages/mainPage'

const mainPage = new MainPage()

describe('Upload mp3 file and convert speech to text', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com')
  })

  it('Scroll, switch panel, upload file and verify transcription', () => {
    mainPage.scrollToPanel()
    cy.get('[id*="content-hd-voice-ai"]').should('have.attr', 'data-state', 'active')
    mainPage.clickSpeechToText()
    cy.get('[id*="content-speech-to-text"]').should('have.attr', 'data-state', 'active')
    mainPage.uploadAudio('cypress/fixtures/test.mp3')
    mainPage.verifyResultText('Hello World')
  })
})