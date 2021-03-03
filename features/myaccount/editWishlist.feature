Feature:My account

Scenario Outline: User  can edit wishlist
Given I was login the store "<customer_info>"
When I hover on one item
Then I can edit its qty
Then I can remove it
