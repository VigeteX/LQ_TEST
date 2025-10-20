Feature: FAQ panel functionality

    Scenario: "FAQ" drop-down message visibility on the mission-control page
        Given I am on the "https://telnyx.com/mission-control" page
        When I scroll down to the "FAQ" panel
        Then The "FAQ" panel should be visible
        Then The answer text "Yes, check out our FastPort solution" should be visible
        When I click on the "I have an existing number I want to move over. Can you work with this?" question
        Then The answer text "Yes, check out our FastPort solution" should not be visible
