Feature: My account

# user can login site

Scenario Outline: user can login from login page
Given An anonymous user on home page
When I enter the email address "<email_address>"
Then I enter login password "<Password>"
Then I can login successfully


Examples:
    | email_address | password | 
    |  mirandafeng@aaxischina.com | 123mirMIR  |