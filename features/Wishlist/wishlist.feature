Feature: Wishlist


    Scenario Outline: user can go to wishlist from global header
        Given I was an anonymous user
            And I click wishlist link in global header
        When I enter account info "<account_info>"
        Then I was taken to wishlist page successfully

        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |



    Scenario Outline: user can share item in wishlist
        Given I was login the store "<customer_info>"
            And I was on wishlist page
            And I have at least one items in cart
        When I click share wishlist button
            And I enter receiver info "<receiver_info>"
        Then Wishlist shared successfully

        Examples:
            | customer_info                        | receiver_info              |
            | mirandafeng@aaxischina.com,123mirMIR | karinzhang1@aaxischina.com |



    Scenario Outline: user can edit item qty in wishlist
        Given I was login the store "<customer_info>"
            And I was on wishlist page
            And I have at least one items in cart
        When I edit QTY box of one item
        Then This item's QTY updated successfully


        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |



    Scenario Outline: user can delete item from wishlist
        Given I was login the store "<customer_info>"
            And I was on wishlist page
            And I have at least one items in cart
        When I click delete icon of one item
        Then This item deleted from wishlist successfully

        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |




    Scenario Outline: user can add one item to cart from wishlist
        Given I was login the store "<customer_info>"
            And I was on wishlist page
            And I have at least one items in cart
        When I click Add To catt button of one item
        Then This item added to cart successfully

        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |


    Scenario Outline: user can add all item to cart from wishlist
        Given I was login the store "<customer_info>"
            And I was on wishlist page
            And I have more than one items in cart
        When I click Add all To catt button
        Then All items added to cart successfully

        Examples:
            | customer_info                        |
            | mirandafeng@aaxischina.com,123mirMIR |