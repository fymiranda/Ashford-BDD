Feature:PDP

Scenario: User can add item to cart from PDP
Given I am a anonymous user on home page
When I  enter a keyword "<keyword>" to search
Then I was taken to this product detail page
When I click add to cart button
Then item add to cart successfully