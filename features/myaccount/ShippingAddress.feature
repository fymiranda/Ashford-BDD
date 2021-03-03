Feature:My account

Scenario Outline: user  can add new shipping address
Given I was login the store "<customer_info>"
Then I can go to shipping address page
When I click add new address button
Then I can enter my new address info "<new_addressInfo>"
Then I can save a new address

Examples:
    | customer_info | new_addressInfo | 
    | mirandafeng@aaxischina.com,123abcABC  |auto,test,123-457-8907,1900 Avenue of the Stars,Los Angeles,California,90067,United States|


Scenario Outline: user can remove shipping address
Given I was login the store "<customer_info>"
Then I can go to shipping address page
When I click delete link of one shipping address
Then I can delete it

Examples:
    | customer_info | new_addressInfo | 
    | mirandafeng@aaxischina.com,123abcABC  |


Scenario Outline: user can edit shipping address
Given I was login the store "<customer_info>"
Then I can go to shipping address page
When I click edit link of one shipping address
Then I see shipping info display as edit view status
Then I can edit its info "<edit_info>"

Examples:
    | customer_info | new_addressInfo | edit_info |
    | mirandafeng@aaxischina.com,123abcABC  | United States |