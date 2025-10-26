Feature: HOW IT WORKS panel functionality

    Scenario: "HOW IT WORKS" drop-down message switching on the mission-control page
        Given I am on the "mission-control" page
        When I scroll down to the "HOW IT WORKS" panel
        Then The "HOW IT WORKS" panel should be visible
        Then The answer text "Add your organization" should be visible
        When I click on the "Buy phone numbers and inventory" question
        Then The answer text "Search our number inventory for long" should be visible
        When I click on the "Configure your infrastructure" question
        Then The answer text "Provision elastic SIP trunks" should be visible