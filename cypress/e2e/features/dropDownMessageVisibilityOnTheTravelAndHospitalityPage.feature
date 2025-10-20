Feature: FAQ panel functionality

    Scenario: "FAQ" drop-down message visibility on the travel-and-hospitality page
        Given I am on the "https://telnyx.com/solutions/travel-and-hospitality" page
        When I scroll down to the "FAQ" panel
        Then The "FAQ" panel should be visible
        Then The answer text "Telnyx provides AI-powered" should be visible
        When I click on the "What services does Telnyx offer for the travel and hospitality industry?" question
        Then The answer text "Telnyx provides AI-powered" should not be visible
