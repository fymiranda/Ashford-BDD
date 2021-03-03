Feature: My Account


Scenario Outline: Customer can register new account
    Given I was on create account page
    Then I enter first name "<first_name>"
    Then I enter last name "<last_name>"
    Then I enter the email address
    Then I enter password "<Password>"
    Then I enter confirm password "<confirm_password>"
    When I click creat an account button
    Then I was taken to my account page
    Then I see a registration successfully message

    Examples:
        | first_name | last_name | Password | confirm_password |
        | miranda  | test  | 123abcABC* | 123abcABC* |