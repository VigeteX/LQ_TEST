Feature: Download full coverage request

    Scenario: Send Download full coverage request with empty "First name" field
        Given I am on the "https://telnyx.com/global-coverage#our-global-coverage" page
        When I enter nothing into first name input field
        Then First name value should not be displayed
        When I enter lastName into last name input field
        Then Last name value should be displayed
        When I enter example@yourdomain.com into email input field
        Then Email value should be displayed example@yourdomain.com
        When I click on the "Submit" button
        Then The field is required message should be visible