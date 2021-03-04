Feature:PDP

    Scenario: User can add item to cart from PDP
        Given I am on a PDP
        When I click add to cart button
        Then item add to cart successfully



    Scenario Outline: login user can add item to wishlist from PDP
        Given I was login the store "<customer_info>"
            And I was on PDP
        When I click add to wishlist button
        Then item add to wishlist successfully

        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |


    Scenario Outline: Anonymous user can add item to wishlist from PDP
        Given I was a anonymous user
            And I was on PDP
        When I click add to wishlist button
        Then I was taken to login page
        When I enter account info "<account_info>"
        Then item add to wishlist successfully

        Examples:
            | account_info                         |
            | mirandafeng@aaxischina.com,123mirMIR |