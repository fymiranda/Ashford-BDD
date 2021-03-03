Feature: search

Scenario Outline: User can search a product and go to deatail page
Given I am a anonymous user on home page
When I  enter a keyword "<keyword>" to search
Then I was taken to this product detail page

Examples:
    | keyword | 
    | watch  | 