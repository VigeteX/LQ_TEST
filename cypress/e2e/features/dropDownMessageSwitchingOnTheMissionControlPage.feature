Feature: FAQ panel functionality

    Scenario: "FAQ" drop-down message switching on the mission-control page
        Given I am on the "https://telnyx.com/mission-control" page
        When I scroll down to the "FAQ" panel
        Then The "FAQ" panel should be visible
        Then The answer text "Yes, check out our FastPort solution" should be visible
        When I click on the "Can I create sub-accounts? How can I get Managed Accounts?" question
        Then The answer text "Yes, check out our FastPort solution" should not be visible
        Then The answer text "If you have Managed Accounts" should be visible
