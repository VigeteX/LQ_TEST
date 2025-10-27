Feature: FAQ panel functionality

    Scenario: "FAQ" drop-down message switching on the travel-and-hospitality page
        Given I am on the "solutions/travel-and-hospitality" page
        When I scroll down to the "FAQ" panel
        Then The "FAQ" panel should be visible
        Then The answer text "Telnyx provides AI-powered" should be visible
        When I click on the "How can Telnyx Voice AI improve my hotel’s customer service?" question
        Then The answer text "Telnyx provides AI-powered" should not be visible
        Then The answer text "Telnyx's Voice AI" should be visible


    