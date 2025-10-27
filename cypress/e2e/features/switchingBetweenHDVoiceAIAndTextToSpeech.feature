Feature: Voice panel functionality

    Scenario: Switching between "HD Voice AI" and "Text to speech" options to clear text field
        Given I am on the "" page
        When I scroll down to the "True HD voice, end-to-end" panel
        Then The "HD VOICE AI" panel should be visible
        When I click on the "Text to speech" button
        Then The panel title should change to "TEXT TO SPEECH"
        When I enter "text" into the text field
        Then The text field should contain "text"
        When I click on the "HD Voice AI" button
        Then The panel title should change to "HD VOICE AI"
        When I click on the "Text to speech" button
        Then The panel title should change to "TEXT TO SPEECH"
        And The message in the text field should change to the standard one