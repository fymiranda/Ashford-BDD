Feature:Page browse

    Scenario Outline: Customer can browse to a Product detail page
        Given I was on the home page
        When I click one category "<category>"
        Then I was taken to a plp
        When I click one product image
        Then I was taken to product detail page

        Examples:
            | category     |
            | Mens Watches |



    Scenario Outline: Customer can view min PDP
        Given I was on the home page
        When I  enter a keyword "<keyword>" to search
        Then I was taken to a search result page
        When I mouse over on one product card
        Then I can see quick view icon
            And I can expand this quick view


        Examples:
            | keyword |
            | Watches |