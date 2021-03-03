Feature:My account

Scenario Outline: Login user can edit user info
Given I was login the store "<customer_info>"
Then I can go to user info page
When I edit email address 
When I edit password
When I edit first name
Then I edit email address sucessfully
Then I edit password sucessfully
Then I edit first name sucessfully

Examples:
    | customer_info | 
    | AutoTest@editUserInfo.com,123abcABC  | 