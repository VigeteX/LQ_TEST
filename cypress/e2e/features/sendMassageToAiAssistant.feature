Feature: Ai assistant
    
    Scenario: Send massage to ai assistant
        Given I am on the "" page
        When I click on the green text button
        When I enter "Hi AI" into into Type your message here... field
        Then Chat text value should be displayed "Hi AI"
        When I click on the send button
        Then Chat message value should be displayed "Hi AI"