Feature:My account

Scenario Outline: user can view and delete stored payment method
Given I was login the store "<customer_info>"
Then I can go to stored payment page
When I click delete link of one stored payment
Then I can delete it

Examples:
    | customer_info | new_addressInfo | 
    | mirandafeng@aaxischina.com,123abcABC  |