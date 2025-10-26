Feature: Download full coverage

    Scenario: Send Download full coverage request with empty "Last name" field
        Given I am on the "global-coverage#our-global-coverage" page
        When I enter firstName into first name input field
        Then First name value should be displayed
        When I enter nothing into last name input field
        Then Last name value should not be displayed
        When I enter example@yourdomain.com into email input field
        Then Email value should be displayed example@yourdomain.com
        When I click on the "Submit" button
        Then The field is required message should be visible