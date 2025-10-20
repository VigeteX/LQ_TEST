Feature: Download full coverage request

    Scenario: Send Download full coverage request with empty "Company email" field
        Given I am on the "https://telnyx.com/global-coverage#our-global-coverage" page
        When I enter firstName into first name input field
        Then First name value should be displayed
        When I enter lastName into last name input field
        Then Last name value should be displayed
        When I enter email into email input field
        Then Email value should be displayed email
        When I click on the "Submit" button
        Then The Must be valid email message should be visible