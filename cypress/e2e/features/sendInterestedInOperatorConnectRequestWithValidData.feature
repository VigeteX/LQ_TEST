Feature: Interested in Operator Connect request 
    
    Scenario: Send "Interested in Operator Connect?" request with valid data
        Given I am on the "https://telnyx.com/products/enterprise-integrations-ms-teams" page
        When I scroll down to the "Interested in learning more about Operator Connect?" panel
        When I enter firstName into first name input field
        Then First name value should be displayed
        When I enter lastName into last name input field
        Then Last name value should be displayed
        When I enter example@yourdomain.com into email input field
        Then Email value should be displayed example@yourdomain.com
        When I enter website into website input field
        Then Website value should be displayed
        When I select 0-50 in drop down menu How many Operator Connect seats will you need?
        When I click on the "Submit" button
        Then "https://telnyx.com/thank-you" page should be opened

        
